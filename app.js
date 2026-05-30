// ── Supabase client ──────────────────────────────────────────
const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ── Apply config ───────────────────────────────────────────
document.querySelectorAll("[data-school-name]").forEach(
  (el) => (el.textContent = SCHOOL_CONFIG.schoolName)
);
document.querySelectorAll("[data-school-short]").forEach(
  (el) => (el.textContent = SCHOOL_CONFIG.schoolShortName)
);
document.querySelectorAll("[data-publication]").forEach(
  (el) => (el.textContent = SCHOOL_CONFIG.publicationName)
);
document.querySelectorAll("[data-tagline]").forEach(
  (el) => (el.textContent = SCHOOL_CONFIG.tagline)
);
document.querySelectorAll("[data-footer-note]").forEach(
  (el) => (el.textContent = SCHOOL_CONFIG.footerNote)
);
document.title = `${SCHOOL_CONFIG.publicationName} · ${SCHOOL_CONFIG.schoolName}`;

// ── Theme ──────────────────────────────────────────────────
const root     = document.documentElement;
const themeBtn = document.getElementById("theme-btn");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

const saved    = localStorage.getItem("theme");
const preferred = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(preferred);

themeBtn.addEventListener("click", () => {
  applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// ── Helpers ────────────────────────────────────────────────
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric",
  });
}

// ── State ──────────────────────────────────────────────────
let allArticles    = [];
let activeCategory = "All";
let searchQuery    = "";

// ── Load articles from Supabase ──────────────────────────────
async function loadArticles() {
  const { data, error } = await _sb
    .from("articles")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Failed to load articles:", error.message);
    return;
  }

  allArticles = data;
  renderHero();
  buildFilters();
  renderGrid();
}

// ── Hero ───────────────────────────────────────────────────
function renderHero() {
  const article = allArticles.find((a) => a.featured) || allArticles[0];
  if (!article) return;
  document.getElementById("hero-tag").textContent     = article.category;
  document.getElementById("hero-title").textContent   = article.title;
  document.getElementById("hero-summary").textContent = article.summary;
  document.getElementById("hero-author").textContent  = article.author;
  document.getElementById("hero-date").textContent    = formatDate(article.date);
  document.getElementById("hero").onclick = () => openModal(article);
}

// ── Category filter pills ──────────────────────────────────
function buildFilters() {
  const filterBar  = document.getElementById("filter-bar");
  const categories = ["All", ...new Set(allArticles.map((a) => a.category))];
  filterBar.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className   = "filter-pill" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      filterBar.querySelectorAll(".filter-pill").forEach((p) =>
        p.classList.toggle("active", p.textContent === cat)
      );
      renderGrid();
    });
    filterBar.appendChild(btn);
  });
}

// ── Search ─────────────────────────────────────────────────
document.getElementById("search-input").addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderGrid();
});

// ── Grid ───────────────────────────────────────────────────
const newsGrid   = document.getElementById("news-grid");
const countLabel = document.getElementById("article-count");

function getFiltered() {
  return allArticles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchQ   = !searchQuery ||
      a.title.toLowerCase().includes(searchQuery) ||
      a.summary.toLowerCase().includes(searchQuery) ||
      a.category.toLowerCase().includes(searchQuery) ||
      a.author.toLowerCase().includes(searchQuery);
    return matchCat && matchQ;
  });
}

function renderGrid() {
  const articles = getFiltered();
  newsGrid.innerHTML = "";
  countLabel.textContent = articles.length === 1 ? "1 article" : `${articles.length} articles`;

  if (articles.length === 0) {
    newsGrid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <p>No articles match your search.</p>
      </div>`;
    return;
  }

  articles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="card-tag">${article.category}</span>
      <h3 class="card-title">${article.title}</h3>
      <p class="card-summary">${article.summary}</p>
      <div class="card-footer">
        <span class="card-author">${article.author}</span>
        <span>${formatDate(article.date)}</span>
      </div>`;
    card.addEventListener("click", () => openModal(article));
    newsGrid.appendChild(card);
  });
}

// ── Modal ──────────────────────────────────────────────────
const backdrop   = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");

function openModal(article) {
  document.getElementById("modal-tag").textContent    = article.category;
  document.getElementById("modal-title").textContent  = article.title;
  document.getElementById("modal-author").textContent = article.author;
  document.getElementById("modal-date").textContent   = formatDate(article.date);
  document.getElementById("modal-body").innerHTML     = article.body;
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ── Boot ───────────────────────────────────────────────────
loadArticles();
