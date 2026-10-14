const recipes = [
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

let activeCategory = "All recipes";
let savedOnly = false;
let selectedRecipeId = null;
let servings = 2;

function readSavedRecipes() {
  try {
    const stored = JSON.parse(localStorage.getItem("gather-saved-recipes") || "[]");
    return new Set(Array.isArray(stored) ? stored.filter((id) => recipes.some((recipe) => recipe.id === id)) : []);
  } catch (error) {
    console.error("Could not load saved recipes from browser storage.", error);
    return new Set();
  }
}

let savedRecipes = readSavedRecipes();

function persistSavedRecipes() {
  try {
    localStorage.setItem("gather-saved-recipes", JSON.stringify([...savedRecipes]));
  } catch (error) {
    console.error("Could not save your recipes to browser storage.", error);
  }
}

function renderCategories() {
  categoryFilters.innerHTML = categories.map((category) => `
    <button class="filter-chip" type="button" data-category="${category}" aria-pressed="${activeCategory === category}">
      ${category}
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
      <button class="recipe-open" type="button" data-open-recipe="${recipe.id}" aria-label="View ${recipe.title} recipe">
        <div class="recipe-art ${recipe.palette}">
          <span class="card-tag">${recipe.category}</span>
          <span class="recipe-emoji" aria-hidden="true">${recipe.emoji}</span>
        </div>
        <div class="card-copy">
          <h3 class="card-title">${recipe.title}</h3>
          <p class="card-description">${recipe.description}</p>
          <div class="card-meta">
            <span>◷ &nbsp;${recipe.time} min</span><i class="meta-dot" aria-hidden="true"></i><span>${recipe.difficulty}</span>
          </div>
        </div>
      </button>
      <button class="favorite-button" type="button" data-save-recipe="${recipe.id}" aria-label="${savedRecipes.has(recipe.id) ? "Remove" : "Save"} ${recipe.title}" aria-pressed="${savedRecipes.has(recipe.id)}">
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
    [1 / 8, "⅛"], [1 / 6, "⅙"], [1 / 4, "¼"], [1 / 3, "⅓"],
    [1 / 2, "½"], [2 / 3, "⅔"], [3 / 4, "¾"]
  ];
  const matched = fractions.find(([value]) => Math.abs(value - fraction) < 0.035);
  if (matched) return `${whole || ""}${whole ? " " : ""}${matched[1]}`;
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(1).replace(/\.0$/, "");
}

function renderRecipeDetail(recipe) {
  const scale = servings / recipe.servings;
  recipeDetail.innerHTML = `
    <div class="detail-banner recipe-art ${recipe.palette}">
      <span class="recipe-emoji" aria-hidden="true">${recipe.emoji}</span>
    </div>
    <div class="detail-content">
      <div class="detail-heading-row">
        <div>
          <p class="eyebrow">${recipe.category.toUpperCase()}</p>
          <h2 class="detail-title" id="dialog-title">${recipe.title}</h2>
        </div>
        <button class="detail-favorite" type="button" data-save-recipe="${recipe.id}" aria-label="${savedRecipes.has(recipe.id) ? "Remove" : "Save"} ${recipe.title}" aria-pressed="${savedRecipes.has(recipe.id)}">
          ${savedRecipes.has(recipe.id) ? "♥" : "♡"}
        </button>
      </div>
      <p class="detail-description">${recipe.description}</p>
      <div class="detail-stats">
        <div class="detail-stat"><strong>${recipe.time} min</strong>Total time</div>
        <div class="detail-stat"><strong>${recipe.difficulty}</strong>Difficulty</div>
        <div class="detail-stat"><strong>${servings}</strong>Servings</div>
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
            ${recipe.ingredients.map((ingredient) => {
              const amount = ingredient.amount === null ? "" : `${formatAmount(ingredient.amount * scale)}${ingredient.unit ? ` ${ingredient.unit}` : ""} `;
              return `<li>${amount}${ingredient.item}</li>`;
            }).join("")}
          </ul>
        </section>
        <section aria-labelledby="method-heading">
          <h3 id="method-heading">Let’s make it</h3>
          <ol class="steps-list">${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </section>
      </div>
    </div>
  `;
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
  }
});

document.querySelector("#dialog-close").addEventListener("click", () => recipeDialog.close());
recipeDialog.addEventListener("click", (event) => {
  if (event.target === recipeDialog) recipeDialog.close();
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
