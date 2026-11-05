// CONFIGURATION
const CONFIG = {
  email: "samsambelly123@gmail.com",
  formEndpoint: ""
};

// PROJECT DATA
const PROJECTS = [
  {
    id: "generx",
    title: "GeneRX: AI Generic Medicine Finder",
    category: "Mobile",
    highlight: "Finalist — Cebu SolutionsFest 2026",
    role: "Lead Architect & Mobile Developer",
    tags: ["React Native", "Expo", "Supabase", "pgvector", "Gemini", "OCR"],
    shortDesc: "A civic healthcare application that matches branded prescriptions with FDA-certified, chemically equivalent generic medicines costing up to 70% less.",
    problem: "In the Philippines, vulnerable patients routinely overpay for branded medications due to pharmacy information asymmetry and lack of generic awareness.",
    myWork: "Architected the complete mobile prototype: integrated prescription camera capture with client-side OCR parsing, developed a fuzzy-search lookup against DOH drug catalogs, and configured Supabase pgvector for vector-based chemical equivalence matching.",
    features: [
      "Prescription image scanning with local OCR parsing.",
      "Semantic vector matching for complex chemical compounds using pgvector.",
      "Trilingual accessibility (Cebuano, Filipino, English).",
      "Local cache for essential life-saving generic substitutes."
    ],
    github: null,
    live: null
  },
  {
    id: "mitinda",
    title: "MiTinda: Karenderya Operations PWA",
    category: "Full-Stack",
    highlight: "Production deployment for family eatery",
    role: "Solo Creator & Developer",
    tags: ["React 19", "Vite", "Tailwind CSS", "PWA", "Cloudflare Pages"],
    shortDesc: "An installable, offline-first Progressive Web App designed specifically for neighborhood eateries—daily menus, market prep, and customer credit (utang) ledgers.",
    problem: "Philippine neighborhood eateries operate on informal memory and paper slips, leading to frequent cash leakages and uncollected customer debt.",
    myWork: "Designed grease-finger friendly tap targets for touchscreens, engineered offline data persistence using IndexedDB, and set up continuous automated deployments via Cloudflare Pages.",
    features: [
      "Installable PWA running 100% offline via Service Workers.",
      "Tap-based dish selection and morning market preparation calculator.",
      "IndexedDB customer balance tracker with timestamped debt logs.",
      "Zero operating expenses using Cloudflare Pages edge delivery."
    ],
    github: "https://github.com/samgwapo-123/MiTinda",
    live: null
  },
  {
    id: "mobility",
    title: "Civic Jeepney Mobility Platform",
    category: "Data/Backend",
    highlight: "Can You HackIT Cebu 2026 Entry",
    role: "Backend & Data Lead",
    tags: ["Next.js", "TypeScript", "Spatial Data", "Algorithms"],
    shortDesc: "A public commuter route analytics concept that flags underserved Cebu public transit corridors.",
    problem: "Municipal planners make route modifications without ground-level telemetry on where Cebuano commuters experience peak vehicle deficits.",
    myWork: "Engineered synthetic trip generation simulating passenger density across 6 major Cebu corridors and authored gap-detection heuristics flagging underserved routes.",
    features: [
      "Peak-hour commuter passenger volume modeling.",
      "Corridor deficiency flagging based on vehicle-to-commuter wait ratios.",
      "Interactive dashboard for transit planners to visualize pinch points."
    ],
    github: null,
    live: null
  },
  {
    id: "empress",
    title: "emPress Photobooth & EmpressLedger",
    category: "Desktop",
    highlight: "Student Business Operating at Live Events",
    role: "Co-Founder & Systems Lead",
    tags: ["Electron", "React", "Tauri", "Rust", "SQLite", "Cloudflare R2"],
    shortDesc: "A dual hardware-software ecosystem: a touchscreen event photobooth with thermal printing and cloud QR photo sharing, paired with a lightweight desktop accounting ledger.",
    problem: "Commercial photobooth software is prohibitively expensive and lacks integrated inventory-to-revenue tracking for small event businesses.",
    myWork: "Engineered the camera capture, print spooling, and real-time Cloudflare R2 upload pipelines in Electron/React. Developed EmpressLedger in Tauri & Rust for event financial tracking.",
    features: [
      "Camera tethering, custom frame compositing, and thermal print spooling.",
      "Cloudflare R2 image upload with instant mobile guest QR downloads.",
      "Native Rust desktop accounting ledger running with minimal RAM footprint."
    ],
    github: null,
    live: null
  },
  {
    id: "classsync",
    title: "ClassSync: AI Academic Project Manager",
    category: "Desktop",
    highlight: "CIT-U OOP 2 Finals Project",
    role: "Lead Developer",
    tags: ["Java", "JavaFX 21", "MySQL", "JDBC", "Gemini API"],
    shortDesc: "A desktop project management system with database persistence and Gemini-assisted commit evaluations for objective group grading.",
    problem: "In collegiate software teams, instructors struggle to evaluate individual contributions fairly, leading to free-riding.",
    myWork: "Implemented a pure MVC architecture in JavaFX, structured relational schemas in MySQL via JDBC, and connected Gemini API to evaluate submitted milestone reports against git logs.",
    features: [
      "Strict MVC architecture in JavaFX without heavy runtime overhead.",
      "Safe prepared statement transactions preventing SQL injection.",
      "Gemini API analysis generating objective contribution grading recommendations."
    ],
    github: null,
    live: null
  }
];

// SKILLS DATA
const SKILLS_DATA = [
  {
    category: "Languages",
    items: ["Java (OOP, JavaFX)", "JavaScript (ES6+)", "TypeScript", "Python", "C & C++", "C#", "Kotlin", "Rust (Learning/Tauri)"]
  },
  {
    category: "Frontend & UI",
    items: ["React.js", "Next.js", "Tailwind CSS", "Progressive Web Apps (PWA)", "React Native (Expo)", "Semantic HTML5 & Accessible CSS"]
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js / Express", "Python (Flask)", "PHP", "Supabase BaaS", "Cloudflare Pages & R2 Storage", "RESTful API Design"]
  },
  {
    category: "Databases & AI",
    items: ["PostgreSQL (pgvector)", "MySQL Relational Schemas", "SQLite Embedded", "Gemini API", "Retrieval-Augmented Generation (RAG)", "Client-Side OCR"]
  }
];

// DOM UTILITIES
const $ = (sel) => document.querySelector(sel);
const escapeHtml = (str) => !str ? "" : String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function showToast(msg) {
  const toast = $("#toastPill");
  $("#toastMsg").textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function copyToClipboard(text, alertMsg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => showToast(alertMsg)).catch(() => {
    showToast("Copy failed: " + text);
  });
}

// THEME CONTROLLER
const themeBtn = $("#themeToggle");
const sunIcon = $("#sunIcon");
const moonIcon = $("#moonIcon");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

applyTheme(document.documentElement.getAttribute("data-theme") || "dark");

themeBtn.addEventListener("click", () => {
  const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem("theme-preference", nextTheme);
  applyTheme(nextTheme);
});

// MOBILE NAVIGATION
const mobileBtn = $("#mobileMenuBtn");
const navLinks = $("#navLinks");
mobileBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  mobileBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    mobileBtn.setAttribute("aria-expanded", "false");
  }
});

// SKILLS RENDERING
$("#skillsContainer").innerHTML = SKILLS_DATA.map(group => `
  <div class="skill-block">
    <h3 class="skill-header">
      <span style="color:var(--accent);">✦</span>
      <span>${escapeHtml(group.category)}</span>
    </h3>
    <ul class="skill-list">
      ${group.items.map(item => `<li class="skill-item">${escapeHtml(item)}</li>`).join("")}
    </ul>
  </div>
`).join("");

// PROJECTS FILTER & RENDERING
const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];

function renderFilters(active) {
  $("#filterPills").innerHTML = categories.map(cat => `
    <button class="filter-btn" aria-pressed="${cat === active}" data-category="${escapeHtml(cat)}">
      ${escapeHtml(cat)}
    </button>
  `).join("");
}

function renderProjects(filter = "All") {
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  $("#projectsGrid").innerHTML = filtered.map(p => `
    <article class="case-card">
      <div class="case-badge-row">
        <span class="case-category">${escapeHtml(p.highlight || p.category)}</span>
        <span class="tag-chip">${escapeHtml(p.category)}</span>
      </div>
      <h3 class="case-title">${escapeHtml(p.title)}</h3>
      <p class="case-desc">${escapeHtml(p.shortDesc)}</p>
      <ul class="case-stack">
        ${p.tags.map(t => `<li class="tag-chip">${escapeHtml(t)}</li>`).join("")}
      </ul>
      <div class="case-actions">
        <button class="btn-inspect" data-id="${p.id}">
          <span>Inspect Architecture</span>
          <span aria-hidden="true">→</span>
        </button>
        <div class="case-ext-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="ext-link-btn">Code</a>` : ""}
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener noreferrer" class="ext-link-btn" style="background:var(--accent);color:#fff;border-color:var(--accent);">Live</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

renderFilters("All");
renderProjects("All");

$("#filterPills").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  const cat = btn.getAttribute("data-category");
  renderFilters(cat);
  renderProjects(cat);
});

// MODAL ARCHITECTURE CONTROLLER
const modal = $("#projectModal");
let prevActiveEl = null;

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  prevActiveEl = document.activeElement;

  $("#modalTitle").textContent = p.title;
  $("#modalBody").innerHTML = `
    <div class="modal-block">
      <div class="modal-block-label">Role & Engineering Scope</div>
      <p><strong>${escapeHtml(p.role)}</strong></p>
    </div>
    <div class="modal-block">
      <div class="modal-block-label">Problem Being Solved</div>
      <p>${escapeHtml(p.problem)}</p>
    </div>
    <div class="modal-block">
      <div class="modal-block-label">My Technical Contributions</div>
      <p>${escapeHtml(p.myWork)}</p>
    </div>
    <div class="modal-block">
      <div class="modal-block-label">Key Engineered Features</div>
      <ul class="modal-feature-list">
        ${p.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}
      </ul>
    </div>
  `;

  let footerHtml = `<button class="btn-outline" id="modalCloseAction">Close</button>`;
  if (p.github) footerHtml += `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-accent">GitHub Repo</a>`;
  $("#modalFooter").innerHTML = footerHtml;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#modalCloseBtn").focus();

  $("#modalCloseAction").addEventListener("click", closeModal);
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (prevActiveEl) prevActiveEl.focus();
}

$("#projectsGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inspect");
  if (btn) openModal(btn.getAttribute("data-id"));
});

$("#modalCloseBtn").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
});

// CLIPBOARD ACTIONS
$("#copyMailBtn").addEventListener("click", function() {
  copyToClipboard(this.getAttribute("data-email"), "Email copied to clipboard!");
});
$("#cvBtn").addEventListener("click", () => showToast("Downloading CV document..."));

// CONTACT FORM HANDLER
const form = $("#contactForm");
const alertEl = $("#formAlert");
const submitBtn = $("#submitFormBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  alertEl.className = "form-alert";
  alertEl.style.display = "none";

  const formData = new FormData(form);
  if (formData.get("_gotcha")) return;

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    alertEl.textContent = "Please fill out all required fields.";
    alertEl.classList.add("error");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alertEl.textContent = "Please enter a valid email address.";
    alertEl.classList.add("error");
    return;
  }

  if (CONFIG.formEndpoint) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Transmitting...";
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) throw 0;
      form.reset();
      alertEl.textContent = "Message sent successfully! I will reply shortly.";
      alertEl.classList.add("success");
      showToast("Message transmitted!");
    } catch (err) {
      fallbackMailto(name, email, message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Transmit Message →";
    }
  } else {
    fallbackMailto(name, email, message);
    form.reset();
    alertEl.textContent = "Launching your mail client with this drafted message...";
    alertEl.classList.add("success");
  }
});

function fallbackMailto(name, email, msg) {
  const body = `From: ${name} (${email})\n\nMessage:\n${msg}`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio Message from " + name)}&body=${encodeURIComponent(body)}`;
}