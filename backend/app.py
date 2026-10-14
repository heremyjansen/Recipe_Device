from __future__ import annotations

import hashlib
import ipaddress
import json
import os
import re
import socket
from typing import Any
from urllib.parse import urljoin, urlsplit, urlunsplit

import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request
from flask_cors import CORS
from recipe_scrapers import scrape_html
from werkzeug.exceptions import HTTPException


SERVICE_NAME = "recipe-device-backend"
MAX_PAGE_BYTES = 5 * 1024 * 1024
MAX_REDIRECTS = 5
REQUEST_TIMEOUT = (5, 15)
USER_AGENT = (
    "GatherRecipeDevice/1.0 "
    "(local recipe import; contact the site owner for access details)"
)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

_latest_device_recipe: dict[str, Any] | None = None


class ImportErrorMessage(Exception):
    """An expected recipe import failure safe to return to the local client."""


@app.errorhandler(Exception)
def handle_unexpected_error(error: Exception):
    if isinstance(error, HTTPException):
        return error
    app.logger.exception("Unhandled recipe backend error")
    return jsonify(ok=False, error="The local recipe backend encountered an unexpected error."), 500


def _validated_public_url(value: Any) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ImportErrorMessage("Provide a recipe URL.")

    try:
        parsed = urlsplit(value.strip())
        port = parsed.port
    except ValueError as error:
        raise ImportErrorMessage("The recipe URL is invalid.") from error

    if parsed.scheme.lower() not in {"http", "https"} or not parsed.hostname:
        raise ImportErrorMessage("Recipe URLs must use http or https.")
    if parsed.username is not None or parsed.password is not None:
        raise ImportErrorMessage("Recipe URLs cannot contain embedded credentials.")
    if port is not None and not 1 <= port <= 65535:
        raise ImportErrorMessage("The recipe URL port is invalid.")

    hostname = parsed.hostname.rstrip(".").lower()
    if hostname == "localhost" or hostname.endswith(".localhost"):
        raise ImportErrorMessage("Local and private network URLs cannot be imported.")

    try:
        addresses = {ipaddress.ip_address(hostname)}
    except ValueError:
        try:
            addresses = {
                ipaddress.ip_address(result[4][0])
                for result in socket.getaddrinfo(hostname, port or (443 if parsed.scheme == "https" else 80))
            }
        except (OSError, ValueError) as error:
            raise ImportErrorMessage("The recipe URL host could not be resolved.") from error

    if not addresses or any(not address.is_global for address in addresses):
        raise ImportErrorMessage("Local and private network URLs cannot be imported.")

    return urlunsplit((parsed.scheme.lower(), parsed.netloc, parsed.path or "/", parsed.query, ""))


def _fetch_html(url: str) -> tuple[str, str]:
    current_url = url
    for redirect_count in range(MAX_REDIRECTS + 1):
        try:
            response = requests.get(
                current_url,
                headers={"User-Agent": USER_AGENT, "Accept": "text/html,application/xhtml+xml"},
                timeout=REQUEST_TIMEOUT,
                allow_redirects=False,
                stream=True,
            )
        except requests.RequestException as error:
            raise ImportErrorMessage("Could not retrieve that recipe page.") from error

        try:
            if response.is_redirect or response.is_permanent_redirect:
                if redirect_count == MAX_REDIRECTS:
                    raise ImportErrorMessage("The recipe page redirected too many times.")
                location = response.headers.get("Location")
                if not location:
                    raise ImportErrorMessage("The recipe page returned an invalid redirect.")
                current_url = _validated_public_url(urljoin(current_url, location))
                continue

            if response.status_code >= 400:
                raise ImportErrorMessage(f"The recipe website returned HTTP {response.status_code}.")

            content_type = response.headers.get("Content-Type", "").lower()
            if content_type and not any(
                accepted in content_type
                for accepted in ("text/html", "application/xhtml+xml", "application/ld+json")
            ):
                raise ImportErrorMessage("The recipe URL did not return an HTML page.")

            body = bytearray()
            for chunk in response.iter_content(chunk_size=64 * 1024):
                body.extend(chunk)
                if len(body) > MAX_PAGE_BYTES:
                    raise ImportErrorMessage("The recipe page is too large to import.")
            encoding = response.encoding or "utf-8"
            return body.decode(encoding, errors="replace"), current_url
        finally:
            response.close()

    raise ImportErrorMessage("Could not follow the recipe page redirect.")


def _as_text(value: Any) -> str:
    if isinstance(value, str):
        return value.strip()
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, dict):
        return _as_text(value.get("text") or value.get("name") or value.get("@value"))
    return ""


def _recipe_nodes(value: Any):
    if isinstance(value, list):
        for child in value:
            yield from _recipe_nodes(child)
    elif isinstance(value, dict):
        recipe_type = value.get("@type", [])
        recipe_types = recipe_type if isinstance(recipe_type, list) else [recipe_type]
        if any(_as_text(item).rsplit("/", 1)[-1].rsplit("#", 1)[-1].lower() == "recipe" for item in recipe_types):
            yield value
        for key, child in value.items():
            if key != "@context":
                yield from _recipe_nodes(child)


def _json_ld_recipe(html: str) -> dict[str, Any] | None:
    soup = BeautifulSoup(html, "html.parser")
    first_recipe: dict[str, Any] | None = None
    for script in soup.find_all("script", attrs={"type": re.compile(r"^application/ld\+json", re.I)}):
        raw_json = script.string or script.get_text()
        try:
            data = json.loads(raw_json)
        except (json.JSONDecodeError, TypeError):
            continue
        for node in _recipe_nodes(data):
            instructions = _normalize_instructions(node.get("recipeInstructions"))
            ingredients = node.get("recipeIngredient", [])
            if isinstance(ingredients, str):
                ingredients = [ingredients]
            if not isinstance(ingredients, list):
                ingredients = []
            recipe = {
                "title": _as_text(node.get("name")),
                "description": _as_text(node.get("description")),
                "image": _normalize_image(node.get("image")),
                "category": _as_text(node.get("recipeCategory")) or "Imported",
                "time": _duration_minutes(node.get("totalTime")),
                "difficulty": "Imported",
                "servings": _parse_servings(node.get("recipeYield")),
                "ingredients": [_as_text(item) for item in ingredients if _as_text(item)],
                "steps": instructions,
            }
            if _is_complete(recipe):
                return recipe
            if first_recipe is None:
                first_recipe = recipe
    return first_recipe


def _normalize_instructions(value: Any) -> list[str]:
    if isinstance(value, str):
        soup = BeautifulSoup(value, "html.parser")
        for tag in soup.find_all(["br", "p", "li", "div"]):
            tag.insert_before("\n")
        text = soup.get_text(" ", strip=True)
        return _split_instruction_text(text)
    if isinstance(value, list):
        steps: list[str] = []
        for item in value:
            if isinstance(item, str):
                steps.extend(_normalize_instruction_list_item(item))
                continue
            steps.extend(_normalize_instructions(item))
        return steps
    if isinstance(value, dict):
        if value.get("itemListElement"):
            steps = _normalize_instructions(value["itemListElement"])
            heading = _as_text(value.get("name"))
            if heading and steps:
                steps[0] = f"{heading}: {steps[0]}"
            return steps
        if value.get("text"):
            return _normalize_instructions(value["text"])
    return []


def _clean_instruction(value: str) -> str:
    text = re.sub(r"\s+", " ", value).strip()
    text = re.sub(r"^(?:(?:step\s*)?\d{1,2}[.)]|step\s+\d{1,2}\s*[:.)])\s*", "", text, flags=re.I)
    duplicate_heading = re.match(r"^([^:]{2,60}:)\s*\1\s*", text, re.I)
    if duplicate_heading:
        text = f"{duplicate_heading.group(1)} {text[duplicate_heading.end():]}".strip()
    return text.strip()


def _normalize_instruction_list_item(value: str) -> list[str]:
    text = BeautifulSoup(value, "html.parser").get_text(" ", strip=True)
    numbered_steps = re.findall(
        r"(?<!\S)(?:(?:step\s*)?\d{1,2}[.)]|step\s+\d{1,2}\s*[:.)])\s+",
        text,
        flags=re.I,
    )
    if len(numbered_steps) > 1:
        return _split_instruction_text(text)
    cleaned = _clean_instruction(text)
    return [cleaned] if cleaned else []


def _split_instruction_text(value: str) -> list[str]:
    text = _clean_instruction(BeautifulSoup(value, "html.parser").get_text(" ", strip=True))
    if not text:
        return []

    numbered = re.split(r"(?<!\S)(?=(?:(?:step\s*)?\d{1,2}[.)]|step\s+\d{1,2}\s*[:.)])\s+)", text, flags=re.I)
    if len(numbered) > 1:
        pieces = numbered
    else:
        pieces = [part for part in re.split(r"(?<=[.!?])\s+(?=[A-Z0-9“\"'])", text) if part.strip()]
    cleaned = [_clean_instruction(part) for part in pieces]
    return [step for step in cleaned if step]


_UNIT_ALIASES = {
    "tablespoon": "tbsp", "tablespoons": "tbsp", "tablespoonful": "tbsp", "tablespoonfuls": "tbsp",
    "tbsp": "tbsp", "tbs": "tbsp", "tb": "tbsp",
    "teaspoon": "tsp", "teaspoons": "tsp", "teaspoonful": "tsp", "teaspoonfuls": "tsp",
    "tsp": "tsp", "ts": "tsp",
    "cup": "cups", "cups": "cups", "c": "cups",
    "gram": "g", "grams": "g", "g": "g",
    "kilogram": "kg", "kilograms": "kg", "kg": "kg",
    "ounce": "oz", "ounces": "oz", "oz": "oz",
    "pound": "lb", "pounds": "lb", "lbs": "lb", "lb": "lb",
    "milliliter": "ml", "milliliters": "ml", "millilitre": "ml", "millilitres": "ml", "ml": "ml",
    "liter": "l", "liters": "l", "litre": "l", "litres": "l", "l": "l",
    "clove": "cloves", "cloves": "cloves",
    "slice": "slices", "slices": "slices",
    "pinch": "pinches", "pinches": "pinches",
}
_AMOUNT_RE = re.compile(
    r"^\s*(?P<whole>\d+)?\s*(?:(?:and|-)?\s*(?P<numerator>\d+)\s*/\s*(?P<denominator>\d+)|(?P<decimal>\d+(?:\.\d+)?))\s*",
    re.I,
)
_UNIT_RE = re.compile(r"^([A-Za-z]+)\b")
_METRIC_EQUIVALENT_RE = re.compile(
    r"\(\s*\d+(?:\.\d+)?\s*(?:g|grams?|kg|kilograms?|ml|millilit(?:er|re)s?|l|lit(?:er|re)s?|oz|ounces?|lbs?)\s*\)",
    re.I,
)
_UNICODE_FRACTIONS = {
    "½": 1 / 2, "⅓": 1 / 3, "⅔": 2 / 3, "¼": 1 / 4,
    "¾": 3 / 4, "⅛": 1 / 8, "⅙": 1 / 6,
}


def _parse_amount(match: re.Match[str]) -> float | None:
    denominator = match.group("denominator")
    if denominator:
        denominator_value = int(denominator)
        if denominator_value == 0:
            return None
        return float(match.group("whole") or 0) + int(match.group("numerator")) / denominator_value
    decimal = match.group("decimal")
    return float(decimal) if decimal else None


def _normalize_ingredient(value: Any) -> dict[str, Any]:
    if isinstance(value, dict):
        raw = _as_text(value.get("original")) or _as_text(value.get("item"))
        amount = value.get("amount")
        try:
            amount = float(amount) if amount is not None else None
            if amount is not None and (not amount >= 0 or amount == float("inf")):
                amount = None
        except (TypeError, ValueError):
            amount = None
        unit_token = _as_text(value.get("unit")).lower().rstrip(".")
        unit = _UNIT_ALIASES.get(unit_token, unit_token)
        item = _as_text(value.get("item"))
        if not item:
            return _parse_ingredient_string(raw)
        return {"amount": amount, "unit": unit, "item": item, "original": raw}
    return _parse_ingredient_string(_as_text(value))


def _parse_ingredient_string(raw: str) -> dict[str, Any]:
    original = re.sub(r"\s+", " ", raw).strip()
    cleaned = _METRIC_EQUIVALENT_RE.sub("", original)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    match = _AMOUNT_RE.match(cleaned)
    if match:
        amount = _parse_amount(match)
        consumed = match.end()
    else:
        unicode_match = re.match(r"^\s*(?P<whole>\d+)?\s*(?P<fraction>[½⅓⅔¼¾⅛⅙])", cleaned)
        if unicode_match:
            amount = float(unicode_match.group("whole") or 0) + _UNICODE_FRACTIONS[unicode_match.group("fraction")]
            consumed = unicode_match.end()
        else:
            return {"amount": None, "unit": "", "item": cleaned or original, "original": original}

    if amount is None:
        return {"amount": None, "unit": "", "item": cleaned or original, "original": original}
    remainder = cleaned[consumed:].strip()
    unit_match = _UNIT_RE.match(remainder)
    unit = ""
    if unit_match:
        candidate = unit_match.group(1).lower().rstrip(".")
        normalized_unit = _UNIT_ALIASES.get(candidate)
        if normalized_unit:
            unit = normalized_unit
            remainder = remainder[unit_match.end():].strip()

    item = re.sub(r"^\s*[,;:]\s*", "", remainder).strip()
    return {
        "amount": amount,
        "unit": unit,
        "item": item or original,
        "original": original,
    }


def _normalize_image(value: Any) -> str:
    if isinstance(value, str):
        return value.strip()
    if isinstance(value, list):
        for item in value:
            image = _normalize_image(item)
            if image:
                return image
    if isinstance(value, dict):
        return _as_text(value.get("url") or value.get("contentUrl"))
    return ""


def _duration_minutes(value: Any) -> int:
    if not isinstance(value, str):
        return 0
    match = re.fullmatch(
        r"P(?:(?P<days>\d+(?:\.\d+)?)D)?"
        r"(?:T(?:(?P<hours>\d+(?:\.\d+)?)H)?"
        r"(?:(?P<minutes>\d+(?:\.\d+)?)M)?"
        r"(?:(?P<seconds>\d+(?:\.\d+)?)S)?)?",
        value.strip(),
        re.I,
    )
    if not match:
        return 0
    parts = {key: float(number or 0) for key, number in match.groupdict().items()}
    return round(parts["days"] * 1440 + parts["hours"] * 60 + parts["minutes"] + parts["seconds"] / 60)


def _parse_servings(value: Any) -> int:
    match = re.search(r"\d+", _as_text(value).replace(",", ""))
    return max(1, int(match.group())) if match else 1


def _call_scraper(scraper: Any, method: str, default: Any = "") -> Any:
    try:
        value = getattr(scraper, method)()
        return value if value is not None else default
    except Exception:
        return default


def _scrape_recipe(html: str, source_url: str) -> dict[str, Any]:
    scraper = scrape_html(html=html, org_url=source_url)
    raw_ingredients = _call_scraper(scraper, "ingredients", [])
    raw_instructions = _call_scraper(scraper, "instructions_list", None)
    if not isinstance(raw_instructions, list) or not raw_instructions:
        raw_instructions = _call_scraper(scraper, "instructions", [])
    return {
        "title": _as_text(_call_scraper(scraper, "title")),
        "description": _as_text(_call_scraper(scraper, "description")),
        "image": _normalize_image(_call_scraper(scraper, "image")),
        "category": _as_text(_call_scraper(scraper, "category")) or "Imported",
        "time": _safe_positive_int(_call_scraper(scraper, "total_time", 0)),
        "difficulty": "Imported",
        "servings": _parse_servings(_call_scraper(scraper, "yields", "")),
        "ingredients": [_normalize_ingredient(item) for item in raw_ingredients if _as_text(item)]
        if isinstance(raw_ingredients, list)
        else [],
        "steps": _normalize_instructions(raw_instructions),
    }


def _safe_positive_int(value: Any) -> int:
    try:
        return max(0, int(value))
    except (TypeError, ValueError):
        return 0


def _is_complete(data: dict[str, Any]) -> bool:
    return bool(data.get("title") and data.get("ingredients") and data.get("steps"))


def _normalize_recipe(data: dict[str, Any], source_url: str) -> dict[str, Any]:
    title = _as_text(data.get("title")) or "Untitled recipe"
    identifier = hashlib.sha256(f"{source_url}\n{title.casefold()}".encode("utf-8")).hexdigest()[:20]
    ingredients = data.get("ingredients") if isinstance(data.get("ingredients"), list) else []
    steps = data.get("steps") if isinstance(data.get("steps"), list) else []
    image = _normalize_image(data.get("image"))
    if image:
        image = urljoin(source_url, image)
    raw_steps = data.get("steps")
    if not raw_steps:
        raw_steps = data.get("instructions")
    return {
        "id": f"imported-{identifier}",
        "title": title,
        "sourceUrl": source_url,
        "description": _as_text(data.get("description")),
        "image": image,
        "category": _as_text(data.get("category")) or "Imported",
        "time": _safe_positive_int(data.get("time")),
        "difficulty": _as_text(data.get("difficulty")) or "Imported",
        "servings": _parse_servings(data.get("servings")),
        "ingredients": [
            normalized
            for normalized in (_normalize_ingredient(item) for item in ingredients)
            if normalized["item"]
        ],
        "steps": _normalize_instructions(raw_steps),
        "imported": True,
    }


@app.get("/api/health")
def health():
    return jsonify(ok=True, service=SERVICE_NAME)


@app.get("/api/status")
def status():
    return jsonify(ok=True, service=SERVICE_NAME, device="mock", connected=False)


@app.post("/api/import-recipe")
def import_recipe():
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return jsonify(ok=False, error="Send a JSON object containing a recipe URL."), 400

    try:
        source_url = _validated_public_url(payload.get("url"))
        html, final_url = _fetch_html(source_url)
        final_url = _validated_public_url(final_url)
        scraped: dict[str, Any] = {}
        try:
            scraped = _scrape_recipe(html, final_url)
        except Exception:
            app.logger.info("recipe-scrapers could not parse %s; trying JSON-LD", final_url, exc_info=True)

        if _is_complete(scraped):
            recipe_data = scraped
        else:
            fallback = _json_ld_recipe(html) or {}
            recipe_data = {
                key: fallback.get(key) or scraped.get(key)
                for key in ("title", "description", "image", "category", "time", "difficulty", "servings", "ingredients", "steps")
            }
            if not _is_complete(recipe_data):
                return jsonify(
                    ok=False,
                    error="Could not find a complete recipe on that page. Try a page with Recipe structured data.",
                ), 422

        recipe = _normalize_recipe(recipe_data, final_url)
        return jsonify(ok=True, recipe=recipe)
    except ImportErrorMessage as error:
        return jsonify(ok=False, error=str(error)), 400


@app.post("/api/send")
def send_recipe():
    global _latest_device_recipe

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return jsonify(ok=False, error="Send a JSON recipe payload."), 400

    title = _as_text(payload.get("title"))
    ingredients = payload.get("ingredients")
    instructions = payload.get("instructions", payload.get("steps"))
    if not title or not isinstance(ingredients, list) or not isinstance(instructions, list):
        return jsonify(ok=False, error="Recipe payload needs a title, ingredients, and instructions."), 400

    _latest_device_recipe = {
        **payload,
        "title": title,
        "ingredients": ingredients,
        "instructions": [_as_text(step) for step in instructions if _as_text(step)],
    }
    return jsonify(
        ok=True,
        message="Recipe queued for device",
        recipe=_latest_device_recipe,
    )


@app.get("/api/device-preview")
def device_preview():
    if _latest_device_recipe is None:
        return jsonify(ok=False, error="No recipe has been sent to the device yet."), 404
    return jsonify(ok=True, recipe=_latest_device_recipe)


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5001,
        debug=os.environ.get("FLASK_DEBUG", "").lower() == "true",
    )
