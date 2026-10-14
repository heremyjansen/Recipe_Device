# Gather — Recipe Device

Gather is a lightweight recipe companion with a local Flask service for recipe importing and mocked device sync. The browser app and service run locally; there is no database.

## Frontend

The frontend is plain HTML, CSS, and JavaScript in the project root. For the smoothest local API access, serve the root directory from a second terminal:

```sh
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000>. You can also open `index.html` directly in a modern browser, but browser security settings may affect local API access.

## Backend setup

Python 3.10 or newer is recommended. In a terminal:

```sh
cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python app.py
```

On Windows PowerShell, activate the environment with `.venv\Scripts\Activate.ps1` instead of the `source` command. The Flask service listens on <http://127.0.0.1:5001>.

## Test recipe import locally

1. Keep the backend running.
2. Open Gather at <http://127.0.0.1:8000>.
3. Paste a public `http` or `https` recipe page URL into **Import a recipe** and choose **Add recipe**.
4. A successful import appears in the recipe list and Saved Recipes, and is marked **Imported**.

The import endpoint tries `recipe-scrapers` first and falls back to Schema.org Recipe JSON-LD. It does not execute page scripts or scrape in the browser. Import is limited to public, reachable HTML pages with recipe data the parsers recognize. Local/private-network URLs are blocked.

Imported ingredient lines are normalized to numeric amount, unit, item, and original text fields. Recipe instructions are kept as scraper-provided steps where available, with numbered and sentence-run splitting for combined text. Gather scales numeric amounts and converts only cup/tablespoon/teaspoon measurements within the volume family; count-based and metric units are not cross-converted.

The backend also provides:

- `GET /api/health` — confirms the service is running.
- `GET /api/status` — reports that device delivery is currently mocked.
- `POST /api/import-recipe` — accepts `{"url":"https://..."}`.

## Mocked send-to-device

Open a recipe and choose **Send to device**. Gather sends its normalized recipe payload to `POST /api/send`; the backend keeps the most recent payload in memory and the browser opens its high-contrast device preview. `GET /api/device-preview` returns that payload for local testing. Restarting Flask clears this in-memory preview. No physical device is contacted.

Imported recipes and saved recipe IDs are stored in browser `localStorage`.

## Future Raspberry Pi integration

The frontend backend URL is configurable in `app.js`. The local import and send endpoints provide a starting contract that can later be hosted on a Raspberry Pi. A future device service can replace the mock queue, report real connectivity through `/api/status`, and render recipes on an e-ink display. Keep the service bound to a trusted local interface and add authentication before exposing it beyond the development machine.
