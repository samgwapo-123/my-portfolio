// CONFIGURATION
const CONFIG = {
  email: "samsambelly123@gmail.com",
  formEndpoint: ""
};

// PROJECT DATA
const PROJECTS = [
  {
    id: "budget-liquidation",
    title: "Smart Org Budget & Liquidation System",
    category: "AI",
    highlight: "Built for student organizations",
    shortDesc: "A receipt and budget tracking platform for student organizations, with AI-assisted expense entry and dual-budget safeguards.",
    problem: "Student organizations can lose paper receipts, spend hours encoding expenses, and run out of budget without warning.",
    features: [
      "Members photograph receipts for Gemini to read prices and categorize expenses.",
      "Recorded totals are locked so the amounts cannot be altered.",
      "Dual budgets set a safe target alongside a hard maximum to protect contingency funds."
    ],
    github: null,
    live: null
  },
  {
    id: "mitinda",
    title: "MiTinda",
    category: "PWA",
    highlight: "Built for a real user: my mom",
    role: "Solo developer",
    tags: ["React 19", "Vite", "Tailwind CSS", "PWA", "Cloudflare Pages"],
    shortDesc: "A web app for my mom's small karenderya to plan the menu, prepare a shopping list, and track customer utang so she can see her budget.",
    problem: "The karenderya was being run with notes in Messenger.",
    myWork: "I built MiTinda as an installable, offline-first app for my mom to use.",
    features: [
      "Three tabs for menu planning, shopping lists, and utang tracking.",
      "Utang balances, credits, payments, and corrections.",
      "Installable and offline-first.",
    ],
    live: "https://mich-tinda.pages.dev"
  },
  {
    id: "medifinder",
    title: "MediFinder: AI Emergency Care & First-Aid Locator",
    category: "Mobile & Web",
    highlight: "Web and mobile app",
    role: "Full-stack developer and AI engineer",
    tags: ["React Native (Expo)", "TypeScript", "Supabase", "PostgreSQL", "Google Gemini API", "Native geolocation"],
    shortDesc: "An emergency first-aid and hospital locator built to address delays during medical emergencies.",
    problem: "Delays during medical emergencies.",
    myWork: "Built a first-aid chatbot grounded in a database of protocols. It uses a person's Medical ID details in the prompt and locates nearby hospitals.",
    features: [
      "RAG first-aid chatbot grounded in protocols for bleeding, fainting, choking, and other first aid; grounding helps reduce hallucinations.",
      "Medical ID details (blood type, allergies, age) are added to the AI prompt for personalized advice.",
      "Distance and estimated travel time to 17+ local hospitals, calculated with the Haversine formula.",
      "Hands off to the phone's maps app for voice navigation, without paid map APIs.",
      "Supabase Row-Level Security protects patient data; database triggers create user profiles automatically.",
      "Runs on web and mobile."
    ],
    github: null,
    live: null
  },
  {
    id: "generx",
    title: "GeneRX (Prototype)",
    category: "Mobile",
    highlight: "Cebu SolutionsFest 2026 finalist",
    role: "Backend and database",
    tags: ["React Native", "Expo", "Supabase", "pgvector", "Gemini", "Tesseract.js", "Fuse.js"],
    shortDesc: "A medicine-finder prototype focused on helping people find affordable generic medicines.",
    problem: "Finding affordable generic medicines.",
    myWork: "Contributed backend and database work to the GeneRX prototype.",
    features: [
      "Prescription OCR using Tesseract.js.",
      "RAG search using Supabase and pgvector.",
      "Cebuano, Filipino, and English support."
    ],
    github: null,
    live: null
  },
  {
    id: "mobility",
    title: "Crowdsourced Jeepney Mobility Platform (IBPAP HackIT)",
    category: "Data/Backend",
    highlight: "IBPAP HackIT",
    role: "Backend and data lead",
    tags: ["Next.js"],
    shortDesc: "A crowdsourced jeepney mobility project with commuter trip logging and a planner dashboard.",
    myWork: "The backend was built with Claude's assistance.",
    features: [
      "Commuter trip logging.",
      "Planner dashboard.",
      "Gap detection on simulated data for six Cebu corridors."
    ],
    github: null,
    live: null
  },
  {
    id: "classsync",
    title: "ClassSync (OOP 2 Finals, Team Project)",
    category: "Academic",
    highlight: "CIT-U OOP 2 finals project",
    role: "Front end",
    tags: ["Java", "JavaFX 21", "MySQL", "JDBC", "Gemini API"],
    shortDesc: "A team project for group project management and AI-assisted grading.",
    features: ["Group project management.", "AI-assisted grading."],
    github: null,
    live: null
  },
  {
    id: "empress",
    title: "emPress Photobooth (Student Business)",
    category: "Business",
    highlight: "Used at university Welcoming Week and an outside event",
    role: "Co-founder and outreach manager",
    tags: ["Electron", "React", "Flask", "Cloudflare R2", "Printing", "QR sharing", "EmpressLedger"],
    shortDesc: "A student photobooth business with a team-built system for printing and QR sharing, plus the EmpressLedger finance tracker.",
    myWork: "As co-founder and outreach manager, I bring the booth to events. The software system was built by the team.",
    features: [
      "Team-built system using Electron, React, and Flask.",
      "Cloudflare R2, printing, and QR sharing.",
      "EmpressLedger finance tracker.",
      "Used at a university Welcoming Week event and an outside event."
    ],
    github: null,
    live: null
  }
];

// SKILLS DATA
const SKILLS_DATA = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C#", "C++", "HTML/CSS"]
  },
  {
    category: "Frontend & UI",
    items: ["React", "Next.js", "Tailwind CSS", "PWAs", "React Native (Expo)", "Blazor"]
  },
  {
    category: "Backend & Cloud",
    items: ["Python/Flask", "PHP", "REST API integration", "Supabase (Auth, Row-Level Security, triggers)"]
  },
  {
    category: "Databases & AI",
    items: ["PostgreSQL (Supabase, pgvector)", "MySQL", "SQLite"]
  },
  {
    category: "Tools",
    items: ["Git/GitHub", "Figma", "Cloudflare Pages/R2", "Electron", "Tauri/Rust", "JavaFX", "Excel"]
  },
  {
    category: "AI",
    items: ["Gemini API integration", "RAG", "Prompt engineering", "OCR"]
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
  const fallback = () => {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    showToast(copied ? alertMsg : "Could not copy email. Select it to copy.");
  };
  if (!navigator.clipboard?.writeText) return fallback();
  navigator.clipboard.writeText(text).then(() => showToast(alertMsg)).catch(fallback);
}

// THEME CONTROLLER
const themeBtn = $("#themeToggle");
const sunIcon = $("#sunIcon");
const moonIcon = $("#moonIcon");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.setAttribute("aria-pressed", String(theme === "light"));
  themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
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
  try { localStorage.setItem("theme-preference", nextTheme); } catch (e) {}
  applyTheme(nextTheme);
});

// MOBILE NAVIGATION
const mobileBtn = $("#mobileMenuBtn");
const navLinks = $("#navLinks");
mobileBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  mobileBtn.setAttribute("aria-expanded", open);
  mobileBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    mobileBtn.setAttribute("aria-expanded", "false");
    mobileBtn.setAttribute("aria-label", "Open navigation menu");
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
      ${p.tags?.length ? `<ul class="case-stack">${p.tags.map(t => `<li class="tag-chip">${escapeHtml(t)}</li>`).join("")}</ul>` : ""}
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
  $("#modalBody").innerHTML = [
    p.role && `<div class="modal-block"><div class="modal-block-label">Role & Engineering Scope</div><p><strong>${escapeHtml(p.role)}</strong></p></div>`,
    p.problem && `<div class="modal-block"><div class="modal-block-label">Problem Being Solved</div><p>${escapeHtml(p.problem)}</p></div>`,
    p.myWork && `<div class="modal-block"><div class="modal-block-label">My Technical Contributions</div><p>${escapeHtml(p.myWork)}</p></div>`,
    p.features?.length && `<div class="modal-block"><div class="modal-block-label">Key Engineered Features</div><ul class="modal-feature-list">${p.features.map(f => `<li>${escapeHtml(f)}</li>`).join("")}</ul></div>`
  ].filter(Boolean).join("");

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

function keepModalFocus(e) {
  if (e.key !== "Tab" || !modal.classList.contains("active")) return;
  const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

$("#projectsGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inspect");
  if (btn) openModal(btn.getAttribute("data-id"));
});

$("#modalCloseBtn").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
  keepModalFocus(e);
  if (e.key === "Escape" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    mobileBtn.setAttribute("aria-expanded", "false");
    mobileBtn.setAttribute("aria-label", "Open navigation menu");
    mobileBtn.focus();
  }
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
  if (message.length < 10) {
    alertEl.textContent = "Please add a little more detail (at least 10 characters).";
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
