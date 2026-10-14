const builtInRecipes = [
  {
    id: "lemon-pasta",
    title: "Creamy lemon pasta",
    description: "Silky, bright, and on the table in twenty minutes.",
    category: "Quick & easy",
    time: 20,
    difficulty: "Easy",
    servings: 2,
    emoji: "🍋",
    palette: "yellow",
    ingredients: [
      { amount: 200, unit: "g", item: "spaghetti" },
      { amount: 1, unit: "", item: "lemon, zested and juiced" },
      { amount: 100, unit: "ml", item: "heavy cream" },
      { amount: 35, unit: "g", item: "Parmesan, finely grated" },
      { amount: 1, unit: "tbsp", item: "olive oil" },
      { amount: null, unit: "", item: "black pepper and salt, to taste" }
    ],
    steps: [
      "Bring a large pot of well-salted water to a boil. Cook the spaghetti until just shy of al dente.",
      "Warm the olive oil and cream in a large pan over low heat. Stir in the lemon zest and half of the Parmesan.",
      "Transfer the pasta to the pan with a splash of pasta water. Toss until glossy, then stir in the lemon juice.",
      "Finish with black pepper and the remaining Parmesan. Taste, season, and serve right away."
    ]
  },
  {
    id: "green-goddess-bowl",
    title: "Green goddess bowl",
    description: "A fresh, feel-good bowl with herby yogurt dressing.",
    category: "Vegetarian",
    time: 30,
    difficulty: "Easy",
    servings: 2,
    emoji: "🥑",
    palette: "sage",
    ingredients: [
      { amount: 150, unit: "g", item: "quinoa, rinsed" },
      { amount: 1, unit: "", item: "ripe avocado, sliced" },
      { amount: 100, unit: "g", item: "cucumber, chopped" },
      { amount: 120, unit: "g", item: "Greek yogurt" },
      { amount: 15, unit: "g", item: "mixed soft herbs" },
      { amount: 1, unit: "tbsp", item: "lemon juice" }
    ],
    steps: [
      "Cook the quinoa according to the package directions, then fluff with a fork.",
      "Blend the yogurt, herbs, lemon juice, and a pinch of salt until bright green and smooth.",
      "Divide the quinoa between bowls. Add the avocado and cucumber, then spoon over the dressing.",
      "Scatter over any extra herbs and finish with a squeeze of lemon."
    ]
  },
  {
    id: "tomato-toast",
    title: "Whipped ricotta toast",
    description: "Juicy tomatoes, creamy ricotta, and a little crunch.",
    category: "Quick & easy",
    time: 15,
    difficulty: "Easy",
    servings: 2,
    emoji: "🍅",
    palette: "rose",
    ingredients: [
      { amount: 2, unit: "slices", item: "sourdough bread" },
      { amount: 120, unit: "g", item: "ricotta" },
      { amount: 200, unit: "g", item: "ripe cherry tomatoes, halved" },
      { amount: 1, unit: "tbsp", item: "extra-virgin olive oil" },
      { amount: 1, unit: "tsp", item: "honey" },
      { amount: null, unit: "", item: "fresh basil, flaky salt, and pepper" }
    ],
    steps: [
      "Toast the sourdough until deeply golden.",
      "Whip the ricotta with a fork until light and creamy. Season with a pinch of salt.",
      "Toss the tomatoes with olive oil, honey, and a little black pepper.",
      "Spread ricotta generously over the toast, pile on the tomatoes, and finish with basil."
    ]
  },
  {
    id: "cozy-soup",
    title: "Cozy roasted tomato soup",
    description: "Roasted tomatoes and garlic make this a hug in a bowl.",
    category: "Comfort food",
    time: 45,
    difficulty: "Easy",
    servings: 4,
    emoji: "🍲",
    palette: "peach",
    ingredients: [
      { amount: 800, unit: "g", item: "ripe tomatoes, halved" },
      { amount: 1, unit: "", item: "red onion, cut into wedges" },
      { amount: 4, unit: "cloves", item: "garlic, unpeeled" },
      { amount: 500, unit: "ml", item: "vegetable stock" },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 60, unit: "ml", item: "cream, plus extra to serve" }
    ],
    steps: [
      "Heat the oven to 220°C / 425°F. Place the tomatoes, onion, and garlic on a tray and drizzle with olive oil.",
      "Roast for 30 minutes, until the tomatoes are soft and a little caramelized.",
      "Squeeze the garlic from its skins. Transfer everything to a pot with the stock and simmer for 5 minutes.",
      "Blend until smooth, stir in the cream, and season well. Serve warm with a swirl of cream."
    ]
  },
  {
    id: "crispy-salmon",
    title: "Crispy salmon & greens",
    description: "Golden salmon with buttery greens and a zingy dressing.",
    category: "High protein",
    time: 25,
    difficulty: "Easy",
    servings: 2,
    emoji: "🐟",
    palette: "blue",
    ingredients: [
      { amount: 2, unit: "", item: "salmon fillets, skin on" },
      { amount: 250, unit: "g", item: "tenderstem broccoli" },
      { amount: 1, unit: "tbsp", item: "olive oil" },
      { amount: 1, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tsp", item: "honey" },
      { amount: 1, unit: "", item: "lime, cut into wedges" }
    ],
    steps: [
      "Pat the salmon skin dry and season both sides. Mix the soy sauce and honey in a small bowl.",
      "Heat the oil in a pan over medium-high heat. Cook the salmon skin-side down for 5–6 minutes until crisp.",
      "Turn the salmon, brush with the soy mixture, and cook for another 2–3 minutes until just cooked through.",
      "Steam or sauté the broccoli until tender. Serve alongside the salmon with lime wedges."
    ]
  },
  {
    id: "berry-oats",
    title: "Overnight berry oats",
    description: "Wake up to a creamy, make-ahead breakfast.",
    category: "Vegetarian",
    time: 10,
    difficulty: "Easy",
    servings: 2,
    emoji: "🫐",
    palette: "lilac",
    ingredients: [
      { amount: 100, unit: "g", item: "rolled oats" },
      { amount: 200, unit: "ml", item: "milk of your choice" },
      { amount: 100, unit: "g", item: "plain yogurt" },
      { amount: 1, unit: "tbsp", item: "maple syrup" },
      { amount: 100, unit: "g", item: "mixed berries" },
      { amount: 1, unit: "tbsp", item: "chia seeds" }
    ],
    steps: [
      "Stir the oats, milk, yogurt, maple syrup, and chia seeds together in a bowl or jar.",
      "Cover and refrigerate for at least 6 hours, or overnight.",
      "In the morning, loosen with a splash of milk if needed.",
      "Top with the berries and a little extra maple syrup. Enjoy chilled."
    ]
  }
];

const categories = ["All recipes", "Quick & easy", "Vegetarian", "Comfort food", "High protein"];
const grid = document.querySelector("#recipe-grid");
const categoryFilters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#recipe-search");
const savedFilter = document.querySelector("#saved-filter");
const savedCount = document.querySelector("#saved-count");
const emptyState = document.querySelector("#empty-state");
const recipeDialog = document.querySelector("#recipe-dialog");
const recipeDetail = document.querySelector("#recipe-detail");
const deviceDialog = document.querySelector("#device-dialog");
const deviceTitle = document.querySelector("#device-title");
const deviceServingsLabel = document.querySelector("#device-servings");
const devicePageContent = document.querySelector("#device-page");
const devicePageCount = document.querySelector("#device-page-count");
const devicePrevious = document.querySelector("#device-previous");
const deviceNext = document.querySelector("#device-next");
const importForm = document.querySelector("#import-form");
const importUrlInput = document.querySelector("#import-url");
const importStatus = document.querySelector("#import-status");
const appToast = document.querySelector("#app-toast");

let activeCategory = "All recipes";
let savedOnly = false;
let selectedRecipeId = null;
let servings = 2;
let deviceRecipe = null;
let deviceServings = 2;
let deviceMode = "ingredients";
let devicePage = 0;
let importedRecipes = readImportedRecipes();
const recipes = mergeRecipes(importedRecipes);
let savedRecipes = readSavedRecipes();
let toastTimeout;

for (const recipe of importedRecipes) savedRecipes.add(recipe.id);
if (importedRecipes.length) persistSavedRecipes();

const BACKEND_CONFIG = {
  baseUrl: "http://127.0.0.1:5001",
  endpoints: {
    importRecipe: "/api/import-recipe",
    send: "/api/send",
    status: "/api/status",
    devicePreview: "/api/device-preview"
  }
};

const backendApi = {
  importRecipe: (sourceUrl) => requestApi(BACKEND_CONFIG.endpoints.importRecipe, {
    method: "POST",
    body: JSON.stringify({ url: sourceUrl })
  }),
  send: (payload) => requestApi(BACKEND_CONFIG.endpoints.send, {
    method: "POST",
    body: JSON.stringify(payload)
  }),
  status: () => requestApi(BACKEND_CONFIG.endpoints.status),
  devicePreview: () => requestApi(BACKEND_CONFIG.endpoints.devicePreview)
};

async function requestApi(path, options = {}) {
  const url = new URL(path, BACKEND_CONFIG.baseUrl);
  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      }
    });
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(`Could not reach the local backend at ${BACKEND_CONFIG.baseUrl}. Start it with "python app.py" from the backend folder.`);
    }
    throw error;
  }

  if (response.status === 204) return null;
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(`The local backend returned an invalid response (HTTP ${response.status}).`);
  }
  if (!response.ok || result?.ok === false) {
    throw new Error(result?.error || `The local backend returned HTTP ${response.status}.`);
  }
  return result;
}

function canonicalizeRecipeUrl(value) {
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return null;
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

function createImportedRecipeId(sourceUrl) {
  let hash = 2166136261;
  for (const character of sourceUrl) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return `imported-${(hash >>> 0).toString(36)}`;
}

const ingredientFractions = {
  "½": 0.5, "⅓": 1 / 3, "⅔": 2 / 3, "¼": 0.25, "¾": 0.75, "⅛": 0.125, "⅙": 1 / 6,
  "⅜": 3 / 8, "⅝": 5 / 8, "⅞": 7 / 8
};

const ingredientUnits = {
  tablespoon: "tbsp", tablespoons: "tbsp", tbsp: "tbsp", tbs: "tbsp", tb: "tbsp",
  teaspoon: "tsp", teaspoons: "tsp", tsp: "tsp", ts: "tsp",
  cup: "cups", cups: "cups", c: "cups",
  gram: "g", grams: "g", g: "g", kilogram: "kg", kilograms: "kg", kg: "kg",
  ounce: "oz", ounces: "oz", oz: "oz", pound: "lb", pounds: "lb", lbs: "lb", lb: "lb",
  milliliter: "ml", milliliters: "ml", millilitre: "ml", millilitres: "ml", ml: "ml",
  liter: "l", liters: "l", litre: "l", litres: "l", l: "l",
  clove: "cloves", cloves: "cloves", slice: "slices", slices: "slices",
  pinch: "pinches", pinches: "pinches"
};

function parseIngredientAmount(text) {
  const match = text.match(/^\s*(?:(\d+)\s*(?:and\s+|-)?\s*)?(\d+)\s*\/\s*(\d+)\s*|^\s*(\d+(?:\.\d+)?)/i);
  if (!match) {
    const unicodeMatch = text.match(/^\s*(\d+)?\s*([½⅓⅔¼¾⅛⅙])/);
    if (!unicodeMatch) return null;
    return {
      amount: Number(unicodeMatch[1] || 0) + ingredientFractions[unicodeMatch[2]],
      length: unicodeMatch[0].length
    };
  }
  if (match[2] && match[3]) {
    const denominator = Number(match[3]);
    if (!denominator) return null;
    return {
      amount: Number(match[1] || 0) + Number(match[2]) / denominator,
      length: match[0].length
    };
  }
  return { amount: Number(match[4]), length: match[0].length };
}

function normalizeIngredient(ingredient) {
  if (typeof ingredient === "string") {
    const original = ingredient.trim().replace(/\s+/g, " ");
    const cleaned = original.replace(/\(\s*\d+(?:\.\d+)?\s*(?:g|kg|ml|l|oz|lbs?)\s*\)/gi, "").replace(/\s+/g, " ").trim();
    const parsed = parseIngredientAmount(cleaned);
    if (!parsed) return { amount: null, unit: "", item: cleaned || original, original };

    let remainder = cleaned.slice(parsed.length).trim();
    const unitMatch = remainder.match(/^([a-z]+)/i);
    const unitKey = unitMatch?.[1].toLowerCase().replace(/\.$/, "");
    const unit = ingredientUnits[unitKey] || "";
    if (unit) remainder = remainder.slice(unitMatch[0].length).trim();
    const item = remainder.replace(/^[,;:]\s*/, "").trim();
    return { amount: parsed.amount, unit, item: item || original, original };
  }

  if (!ingredient || typeof ingredient !== "object" || Array.isArray(ingredient)) {
    return { amount: null, unit: "", item: "", original: "" };
  }

  const original = typeof ingredient.original === "string" ? ingredient.original.trim() : "";
  const item = typeof ingredient.item === "string" ? ingredient.item.trim() : "";
  if (item && ingredient.amount !== undefined && ingredient.amount !== null) {
    const amount = Number(ingredient.amount);
    return {
      amount: Number.isFinite(amount) && amount >= 0 ? amount : null,
      unit: ingredientUnits[String(ingredient.unit || "").trim().toLowerCase()] || String(ingredient.unit || "").trim().toLowerCase(),
      item,
      original: original || `${ingredient.amount}${ingredient.unit ? ` ${ingredient.unit}` : ""} ${item}`.trim()
    };
  }
  if (item && ingredient.amount === null && !original) {
    const parsedItem = normalizeIngredient(item);
    if (parsedItem.amount !== null) return parsedItem;
    return {
      amount: null,
      unit: typeof ingredient.unit === "string" ? ingredient.unit.trim() : "",
      item,
      original: item
    };
  }
  const raw = original || item;
  const parsed = normalizeIngredient(raw);
  if (parsed.amount !== null || parsed.item) return parsed;
  return { amount: null, unit: "", item: raw, original: raw };
}

function cleanInstructionStep(step) {
  let text = String(step).replace(/\s+/g, " ").trim();
  text = text.replace(/^(?:(?:step\s*)?\d{1,2}[.)]|step\s+\d{1,2}\s*[:.)])\s*/i, "");
  text = text.replace(/^([^:]{2,60}:)\s*\1\s*/i, "$1 ");
  return text.trim();
}

function splitInstructionText(value) {
  const text = String(value || "")
    .replace(/<\s*\/?(?:p|li|div|br|h[1-6])\b[^>]*>/gi, "\n")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return [];

  const numbered = text.split(/(?<!\S)(?=(?:(?:step\s*)?\d{1,2}[.)]|step\s+\d{1,2}\s*[:.)])\s+)/i);
  let parts = numbered.length > 1
    ? numbered
    : text.split(/(?<=[.!?])\s+(?=[A-Z0-9“"'])/);
  parts = parts.map(cleanInstructionStep).filter(Boolean);
  return parts.length ? parts : [text];
}

function normalizeInstructionSteps(value) {
  if (typeof value === "string") return splitInstructionText(value);
  if (!Array.isArray(value)) return [];
  return value.flatMap((step) => {
    if (typeof step === "string") {
      const numberedSteps = step.match(/(?<!\S)(?:(?:step\s*)?\d{1,2}[.)]|step\s+\d{1,2}\s*[:.)])\s+/gi) || [];
      return numberedSteps.length > 1
        ? splitInstructionText(step)
        : [cleanInstructionStep(step)].filter(Boolean);
    }
    if (step && typeof step === "object") {
      if (Array.isArray(step.itemListElement)) {
        const nested = normalizeInstructionSteps(step.itemListElement);
        const heading = typeof step.name === "string" ? step.name.trim() : "";
        if (heading && nested.length) nested[0] = `${heading}: ${nested[0]}`;
        return nested;
      }
      return normalizeInstructionSteps(step.text || step.name || "");
    }
    return [];
  });
}

function normalizeImportedRecipe(candidate) {
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return null;
  const sourceUrl = canonicalizeRecipeUrl(candidate.sourceUrl || candidate.url || "");
  const title = typeof candidate.title === "string" ? candidate.title.trim() : "";
  const candidateInstructions = candidate.instructions || candidate.steps;
  if (!sourceUrl || !title || !Array.isArray(candidate.ingredients)) return null;

  const ingredients = candidate.ingredients.map(normalizeIngredient).filter((ingredient) => ingredient.item);
  const steps = normalizeInstructionSteps(candidateInstructions);
  if (!ingredients.length || ingredients.some((ingredient) => !ingredient) || !steps.length) return null;

  const paletteOptions = ["sage", "peach", "lilac", "yellow", "blue", "rose"];
  return {
    id: createImportedRecipeId(sourceUrl),
    sourceUrl,
    image: typeof candidate.image === "string" ? candidate.image : "",
    title,
    description: typeof candidate.description === "string" ? candidate.description.trim() : "A recipe imported from your link.",
    category: typeof candidate.category === "string" && candidate.category.trim() ? candidate.category.trim() : "Imported",
    time: Number.isFinite(Number(candidate.time)) && Number(candidate.time) > 0 ? Math.round(Number(candidate.time)) : 30,
    difficulty: typeof candidate.difficulty === "string" && candidate.difficulty.trim() ? candidate.difficulty.trim() : "Imported",
    servings: Number.isFinite(Number(candidate.servings)) && Number(candidate.servings) > 0
      ? Math.min(12, Math.round(Number(candidate.servings)))
      : 1,
    emoji: typeof candidate.emoji === "string" && candidate.emoji.trim() ? candidate.emoji.trim() : "🍽️",
    palette: paletteOptions.includes(candidate.palette) ? candidate.palette : "sage",
    ingredients,
    steps,
    imported: true
  };
}

function readImportedRecipes() {
  try {
    const stored = JSON.parse(localStorage.getItem("gather-imported-recipes") || "[]");
    if (!Array.isArray(stored)) return [];
    const imported = [];
    const seenUrls = new Set();
    const seenIds = new Set();
    for (const candidate of stored) {
      const recipe = normalizeImportedRecipe(candidate);
      if (!recipe || seenUrls.has(recipe.sourceUrl) || seenIds.has(recipe.id)) continue;
      imported.push(recipe);
      seenUrls.add(recipe.sourceUrl);
      seenIds.add(recipe.id);
    }
    if (JSON.stringify(imported) !== JSON.stringify(stored)) {
      try {
        localStorage.setItem("gather-imported-recipes", JSON.stringify(imported));
      } catch (error) {
        console.error("Could not clean imported recipes in browser storage.", error);
      }
    }
    return imported;
  } catch (error) {
    console.error("Could not load imported recipes from browser storage.", error);
    return [];
  }
}

function mergeRecipes(imported) {
  const merged = [...builtInRecipes];
  const seenIds = new Set(merged.map((recipe) => recipe.id));
  const seenUrls = new Set(merged.map((recipe) => recipe.sourceUrl).filter(Boolean));
  for (const recipe of imported) {
    if (seenIds.has(recipe.id) || seenUrls.has(recipe.sourceUrl)) continue;
    merged.push(recipe);
    seenIds.add(recipe.id);
    seenUrls.add(recipe.sourceUrl);
  }
  return merged;
}

function persistImportedRecipes() {
  try {
    localStorage.setItem("gather-imported-recipes", JSON.stringify(importedRecipes));
  } catch (error) {
    console.error("Could not save imported recipes to browser storage.", error);
    throw new Error("Your browser could not save this imported recipe.");
  }
}

function storeImportedRecipe(candidate) {
  const recipe = normalizeImportedRecipe(candidate);
  if (!recipe) return { ok: false, error: "The imported recipe data is incomplete or invalid." };
  const duplicate = recipes.find((existing) =>
    existing.id === recipe.id ||
    (existing.sourceUrl && canonicalizeRecipeUrl(existing.sourceUrl) === recipe.sourceUrl)
  );
  if (duplicate) return { ok: true, recipe: duplicate, duplicate: true };

  importedRecipes = [...importedRecipes, recipe];
  try {
    persistImportedRecipes();
  } catch (error) {
    importedRecipes.pop();
    return { ok: false, error: error.message };
  }
  recipes.push(recipe);
  savedRecipes.add(recipe.id);
  persistSavedRecipes();
  renderCategories();
  renderRecipes();
  return { ok: true, recipe, duplicate: false };
}

function parseRecipeImportResponse(data, sourceUrl) {
  // The local import service returns structured recipe data; this normalizes it for Gather's recipe model.
  return normalizeImportedRecipe({ ...data, sourceUrl });
}

async function importRecipeFromUrl(value) {
  const sourceUrl = canonicalizeRecipeUrl(typeof value === "string" ? value.trim() : "");
  if (!sourceUrl) {
    return { ok: false, error: "Enter a valid http or https recipe URL." };
  }

  try {
    const result = await backendApi.importRecipe(sourceUrl);
    const recipeData = result?.recipe || result;
    const recipe = parseRecipeImportResponse(recipeData, sourceUrl);
    if (!recipe) return { ok: false, error: "The local service returned incomplete recipe data." };
    return { ok: true, recipe };
  } catch (error) {
    return { ok: false, error: error.message || "Could not import this recipe. Check the local backend and try again." };
  }
}

function readSavedRecipes() {
  try {
    const stored = JSON.parse(localStorage.getItem("gather-saved-recipes") || "[]");
    return new Set(Array.isArray(stored) ? stored.filter((id) => recipes.some((recipe) => recipe.id === id)) : []);
  } catch (error) {
    console.error("Could not load saved recipes from browser storage.", error);
    return new Set();
  }
}

function persistSavedRecipes() {
  try {
    localStorage.setItem("gather-saved-recipes", JSON.stringify([...savedRecipes]));
  } catch (error) {
    console.error("Could not save your recipes to browser storage.", error);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderCategories() {
  const availableCategories = [...categories, ...new Set(
    importedRecipes.map((recipe) => recipe.category).filter((category) => !categories.includes(category))
  )];
  categoryFilters.innerHTML = availableCategories.map((category) => `
    <button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${activeCategory === category}">
      ${escapeHtml(category)}
    </button>
  `).join("");
}

function visibleRecipes() {
  const query = searchInput.value.trim().toLowerCase();
  return recipes.filter((recipe) => {
    const matchesCategory = activeCategory === "All recipes" || recipe.category === activeCategory;
    const matchesSearch = !query || `${recipe.title} ${recipe.description} ${recipe.category}`.toLowerCase().includes(query);
    const matchesSaved = !savedOnly || savedRecipes.has(recipe.id);
    return matchesCategory && matchesSearch && matchesSaved;
  });
}

function renderRecipes() {
  const filteredRecipes = visibleRecipes();
  grid.innerHTML = filteredRecipes.map((recipe) => `
    <article class="recipe-card">
      <button class="recipe-open" type="button" data-open-recipe="${escapeHtml(recipe.id)}" aria-label="View ${escapeHtml(recipe.title)} recipe">
        <div class="recipe-art ${escapeHtml(recipe.palette)}">
          <span class="card-tag">${escapeHtml(recipe.category)}</span>
          ${recipe.sourceUrl ? '<span class="imported-badge">Imported</span>' : ""}
          <span class="recipe-emoji" aria-hidden="true">${escapeHtml(recipe.emoji)}</span>
        </div>
        <div class="card-copy">
          <h3 class="card-title">${escapeHtml(recipe.title)}</h3>
          <p class="card-description">${escapeHtml(recipe.description)}</p>
          <div class="card-meta">
            <span>◷ &nbsp;${escapeHtml(recipe.time)} min</span><i class="meta-dot" aria-hidden="true"></i><span>${escapeHtml(recipe.difficulty)}</span>
          </div>
        </div>
      </button>
      <button class="favorite-button" type="button" data-save-recipe="${escapeHtml(recipe.id)}" aria-label="${savedRecipes.has(recipe.id) ? "Remove" : "Save"} ${escapeHtml(recipe.title)}" aria-pressed="${savedRecipes.has(recipe.id)}">
        ${savedRecipes.has(recipe.id) ? "♥" : "♡"}
      </button>
    </article>
  `).join("");
  emptyState.hidden = filteredRecipes.length > 0;
  savedCount.textContent = savedRecipes.size;
  savedFilter.setAttribute("aria-pressed", String(savedOnly));
}

function formatAmount(amount) {
  if (amount === null) return "";
  const whole = Math.floor(amount);
  const fraction = amount - whole;
  const fractions = [
    [1 / 8, "⅛"], [1 / 6, "⅙"], [1 / 4, "¼"], [1 / 3, "⅓"], [3 / 8, "⅜"],
    [1 / 2, "½"], [5 / 8, "⅝"], [2 / 3, "⅔"], [3 / 4, "¾"], [7 / 8, "⅞"]
  ];
  const matched = fractions.reduce((closest, candidate) => {
    const difference = Math.abs(candidate[0] - fraction);
    return !closest || difference < closest.difference
      ? { fraction: candidate[1], difference }
      : closest;
  }, null);
  if (matched && matched.difference < 0.035) {
    return `${whole || ""}${whole ? " " : ""}${matched.fraction}`;
  }
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(1).replace(/\.0$/, "");
}

function scaleAndFormatIngredient(ingredient, scale) {
  const normalized = normalizeIngredient(ingredient);
  if (normalized.amount === null) return normalized.item;

  const scaledAmount = normalized.amount * scale;
  const unitKey = normalized.unit.trim().toLowerCase();
  const volumeUnits = { cup: "cups", cups: "cups", tbsp: "tbsp", tablespoon: "tbsp", tablespoons: "tbsp", tsp: "tsp", teaspoon: "tsp", teaspoons: "tsp" };
  const unit = volumeUnits[unitKey];
  if (unit) {
    const amountInTeaspoons = scaledAmount * (unit === "cups" ? 48 : unit === "tbsp" ? 3 : 1);
    const cupAmount = amountInTeaspoons / 48;
    const commonFraction = (value) => {
      const formatted = formatAmount(value);
      return !formatted.includes(".");
    };

    let displayAmount;
    let displayUnit;
    if (amountInTeaspoons >= 12 && commonFraction(cupAmount)) {
      displayAmount = cupAmount;
      displayUnit = "cups";
    } else if (amountInTeaspoons >= 3 && commonFraction(amountInTeaspoons / 3)) {
      displayAmount = amountInTeaspoons / 3;
      displayUnit = "tbsp";
    } else {
      displayAmount = amountInTeaspoons;
      displayUnit = "tsp";
    }
    const displayUnitLabel = displayUnit === "cups" && displayAmount <= 1 ? "cup" : displayUnit;
    return `${formatAmount(displayAmount)} ${displayUnitLabel} ${normalized.item}`.trim();
  }

  return `${formatAmount(scaledAmount)}${normalized.unit ? ` ${normalized.unit}` : ""} ${normalized.item}`.trim();
}

const deviceTransport = {
  async send(payload) {
    const result = await backendApi.send(payload);
    const preview = await backendApi.devicePreview();
    const recipe = normalizeDeviceRecipe(preview?.recipe || result?.recipe || payload);
    localStorage.setItem("gather-device-recipe", JSON.stringify(recipe));
    return {
      ok: true,
      recipe,
      message: result?.message || "Recipe sent to the device preview."
    };
  }
};

function normalizeDeviceRecipe(recipe) {
  const ingredients = Array.isArray(recipe?.ingredients) ? recipe.ingredients.map((ingredient) => {
    if (typeof ingredient === "string") return { amount: null, unit: "", item: ingredient };
    return {
      amount: ingredient?.amount === null || ingredient?.amount === undefined ? null : Number(ingredient.amount),
      unit: typeof ingredient?.unit === "string" ? ingredient.unit : "",
      item: typeof ingredient?.item === "string" ? ingredient.item : ""
    };
  }) : [];
  return {
    ...recipe,
    ingredients,
    steps: Array.isArray(recipe?.steps)
      ? recipe.steps
      : Array.isArray(recipe?.instructions)
        ? recipe.instructions
        : [],
    servings: Number.isFinite(Number(recipe?.servings)) && Number(recipe.servings) > 0
      ? Number(recipe.servings)
      : 1
  };
}

async function sendRecipeToDevice(recipe) {
  try {
    if (!recipe || !Array.isArray(recipe.ingredients) || !Array.isArray(recipe.steps)) {
      throw new Error("This recipe is missing ingredients or instructions.");
    }
    const targetServings = selectedRecipeId === recipe.id ? servings : recipe.servings;
    const scale = targetServings / recipe.servings;
    const payload = {
      title: recipe.title,
      sourceUrl: recipe.sourceUrl || null,
      ingredients: recipe.ingredients.map((ingredient) => ({
        amount: ingredient.amount === null ? null : ingredient.amount * scale,
        unit: ingredient.unit,
        item: ingredient.item
      })),
      instructions: [...recipe.steps],
      servings: targetServings
    };
    const result = await deviceTransport.send(payload);
    return { ...result, payload: result.recipe || payload };
  } catch (error) {
    return { ok: false, error: error.message || "Could not prepare this recipe for the device." };
  }
}

function showToast(message, isError = false) {
  window.clearTimeout(toastTimeout);
  appToast.textContent = message;
  appToast.classList.toggle("is-error", isError);
  appToast.hidden = false;
  toastTimeout = window.setTimeout(() => {
    appToast.hidden = true;
  }, 5000);
}

function renderRecipeDetail(recipe) {
  if (!Array.isArray(recipe.ingredients)) {
    recipe.ingredients = [];
  } else if (recipe.ingredients.some((ingredient) =>
    typeof ingredient === "string" ||
    !ingredient ||
    typeof ingredient.item !== "string" ||
    !("amount" in ingredient) ||
    typeof ingredient.unit !== "string"
  )) {
    recipe.ingredients = recipe.ingredients.map(normalizeIngredient).filter((ingredient) => ingredient.item);
  }
  if (typeof recipe.steps === "string") {
    recipe.steps = normalizeInstructionSteps(recipe.steps);
  } else if (!Array.isArray(recipe.steps)) {
    recipe.steps = [];
  } else if (recipe.steps.some((step) => typeof step !== "string")) {
    recipe.steps = normalizeInstructionSteps(recipe.steps);
  }
  const scale = servings / recipe.servings;
  recipeDetail.innerHTML = `
    <div class="detail-banner recipe-art ${escapeHtml(recipe.palette)}">
      <span class="recipe-emoji" aria-hidden="true">${escapeHtml(recipe.emoji)}</span>
    </div>
    <div class="detail-content">
      <div class="detail-heading-row">
        <div>
          <p class="eyebrow">${escapeHtml(recipe.category.toUpperCase())}</p>
          <h2 class="detail-title" id="dialog-title">${escapeHtml(recipe.title)}</h2>
          ${recipe.sourceUrl ? '<span class="detail-imported-badge">Imported recipe</span>' : ""}
        </div>
        <button class="detail-favorite" type="button" data-save-recipe="${escapeHtml(recipe.id)}" aria-label="${savedRecipes.has(recipe.id) ? "Remove" : "Save"} ${escapeHtml(recipe.title)}" aria-pressed="${savedRecipes.has(recipe.id)}">
          ${savedRecipes.has(recipe.id) ? "♥" : "♡"}
        </button>
      </div>
      <p class="detail-description">${escapeHtml(recipe.description)}</p>
      <div class="detail-stats">
        <div class="detail-stat"><strong>${escapeHtml(recipe.time)} min</strong>Total time</div>
        <div class="detail-stat"><strong>${escapeHtml(recipe.difficulty)}</strong>Difficulty</div>
        <div class="detail-stat"><strong>${escapeHtml(servings)}</strong>Servings</div>
      </div>
      <div class="detail-columns">
        <section aria-labelledby="ingredients-heading">
          <h3 id="ingredients-heading">Ingredients</h3>
          <div class="servings-control">
            <button type="button" data-serving-change="-1" aria-label="Decrease servings">−</button>
            <span>Serves ${servings}</span>
            <button type="button" data-serving-change="1" aria-label="Increase servings">+</button>
          </div>
          <ul class="ingredients-list">
            ${recipe.ingredients.map((ingredient) => `<li>${escapeHtml(scaleAndFormatIngredient(ingredient, scale))}</li>`).join("")}
          </ul>
        </section>
        <section aria-labelledby="method-heading">
          <h3 id="method-heading">Let’s make it</h3>
          <ol class="steps-list">${recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        </section>
      </div>
      <div class="device-action-row">
        <button class="text-button" type="button" data-send-recipe="${escapeHtml(recipe.id)}">Send to device <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  `;
}

function renderDeviceView() {
  if (!deviceRecipe) return;
  const isIngredients = deviceMode === "ingredients";
  const items = isIngredients
    ? deviceRecipe.ingredients.map((ingredient) => {
      const amount = ingredient.amount === null
        ? ""
        : `${formatAmount(ingredient.amount * (deviceServings / deviceRecipe.servings))}${ingredient.unit ? ` ${ingredient.unit}` : ""} `;
      return `${amount}${ingredient.item}`;
    })
    : deviceRecipe.steps;
  const pageSize = isIngredients ? 6 : 2;
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  devicePage = Math.min(devicePage, pageCount - 1);
  const visibleItems = items.slice(devicePage * pageSize, (devicePage + 1) * pageSize);

  deviceTitle.textContent = deviceRecipe.title;
  deviceServingsLabel.textContent = `Serves ${deviceServings}`;
  devicePageContent.innerHTML = `
    <h3>${isIngredients ? "Ingredients" : "Method"}</h3>
    <${isIngredients ? "ul" : "ol"} class="device-list">
      ${visibleItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </${isIngredients ? "ul" : "ol"}>
  `;
  devicePageCount.textContent = `Page ${devicePage + 1} of ${pageCount}`;
  devicePrevious.disabled = devicePage === 0;
  deviceNext.disabled = devicePage >= pageCount - 1;
  document.querySelectorAll("[data-device-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.deviceMode === deviceMode));
  });
}

function openDeviceView(recipe, targetServings) {
  deviceRecipe = recipe;
  deviceServings = targetServings;
  deviceMode = "ingredients";
  devicePage = 0;
  renderDeviceView();
  if (recipeDialog.open) recipeDialog.close();
  deviceDialog.showModal();
}

function openRecipe(id) {
  const recipe = recipes.find((item) => item.id === id);
  if (!recipe) return;
  selectedRecipeId = id;
  servings = recipe.servings;
  renderRecipeDetail(recipe);
  recipeDialog.showModal();
}

function toggleSavedRecipe(id) {
  if (savedRecipes.has(id)) savedRecipes.delete(id);
  else savedRecipes.add(id);
  persistSavedRecipes();
  renderRecipes();
  if (selectedRecipeId) {
    const recipe = recipes.find((item) => item.id === selectedRecipeId);
    if (recipe) renderRecipeDetail(recipe);
  }
}

renderCategories();
renderRecipes();

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderRecipes();
});

searchInput.addEventListener("input", renderRecipes);

importForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  importStatus.classList.remove("is-error", "is-success");
  importStatus.textContent = "Checking recipe link…";
  const result = await importRecipeFromUrl(importUrlInput.value);
  if (!result.ok) {
    importStatus.classList.add("is-error");
    importStatus.textContent = result.error;
    return;
  }

  const stored = storeImportedRecipe(result.recipe);
  importStatus.classList.toggle("is-error", !stored.ok);
  importStatus.classList.toggle("is-success", stored.ok);
  importStatus.textContent = stored.ok
    ? stored.duplicate ? "This recipe is already in your collection." : "Recipe imported and saved."
    : stored.error;
});

savedFilter.addEventListener("click", () => {
  savedOnly = !savedOnly;
  renderRecipes();
});

grid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-recipe]");
  if (saveButton) {
    toggleSavedRecipe(saveButton.dataset.saveRecipe);
    return;
  }
  const openButton = event.target.closest("[data-open-recipe]");
  if (openButton) openRecipe(openButton.dataset.openRecipe);
});

recipeDetail.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-recipe]");
  if (saveButton) {
    toggleSavedRecipe(saveButton.dataset.saveRecipe);
    return;
  }
  const servingButton = event.target.closest("[data-serving-change]");
  if (servingButton && selectedRecipeId) {
    servings = Math.max(1, Math.min(12, servings + Number(servingButton.dataset.servingChange)));
    const recipe = recipes.find((item) => item.id === selectedRecipeId);
    if (recipe) renderRecipeDetail(recipe);
    return;
  }
  const sendButton = event.target.closest("[data-send-recipe]");
  if (sendButton) {
    const recipe = recipes.find((item) => item.id === sendButton.dataset.sendRecipe);
    sendRecipeToDevice(recipe).then((result) => {
      showToast(result.ok ? result.message : result.error, !result.ok);
      if (result.ok) openDeviceView(recipe, result.payload.servings);
    });
  }
});

document.querySelector("#dialog-close").addEventListener("click", () => recipeDialog.close());
document.querySelector("#device-close").addEventListener("click", () => deviceDialog.close());
recipeDialog.addEventListener("click", (event) => {
  if (event.target === recipeDialog) recipeDialog.close();
});
deviceDialog.addEventListener("click", (event) => {
  if (event.target === deviceDialog) deviceDialog.close();
});

document.querySelectorAll("[data-device-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    deviceMode = button.dataset.deviceMode;
    devicePage = 0;
    renderDeviceView();
  });
});

devicePrevious.addEventListener("click", () => {
  devicePage = Math.max(0, devicePage - 1);
  renderDeviceView();
});

deviceNext.addEventListener("click", () => {
  devicePage += 1;
  renderDeviceView();
});

document.querySelector("#browse-button").addEventListener("click", () => {
  activeCategory = "All recipes";
  savedOnly = false;
  searchInput.value = "";
  renderCategories();
  renderRecipes();
  document.querySelector("#recipes").scrollIntoView({ behavior: "smooth" });
  searchInput.focus({ preventScroll: true });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !recipeDialog.open && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});
