const page = document.body.dataset.page || "inicio";
const pageFiles = {
  inicio: "index.html",
  "sobre-mi": "sobre-mi.html",
  experiencia: "experiencia.html",
  formacion: "formacion.html",
  habilidades: "habilidades.html",
  contacto: "contacto.html",
};
const navKeys = Object.keys(pageFiles);
const params = new URLSearchParams(location.search);
let language = params.get("lang");
if (!["es", "en"].includes(language)) {
  try {
    language = localStorage.getItem("jazmin-language");
  } catch {}
}
if (!["es", "en"].includes(language)) language = "es";
const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
const canAnimate = () => !motion.matches && "IntersectionObserver" in window;
let revealObserver = null;
let inViewObserver = null;
let rotatorTimer = null;
let galleryTimer = null;
let galleryOffset = 0;
let galleryPaused = false;
let galleryHover = false;
const galleryDelay = 4500;
const mosaicTiles = 3;

const icons = {
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.3V17h16V7.3l-8 5.6-8-5.6ZM5.6 7 12 11.5 18.4 7H5.6Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 5.3 20 12l-6.8 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3 1.4-1.4Z"/></svg>',
};

function node(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
}
function icon(name, cls = "icon") {
  const el = node("span", cls);
  el.innerHTML = icons[name];
  return el;
}
function route(key, hash = "") {
  return `./${pageFiles[key]}?lang=${language}${hash ? `#${hash}` : ""}`;
}
function link(text, key, cls = "", hash = "") {
  const el = node("a", cls, text);
  el.href = route(key, hash);
  return el;
}
function external(text, href, cls = "") {
  const a = node("a", cls, text);
  a.href = href;
  if (href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  return a;
}
function heading(eyebrow, title, lead) {
  const el = node("div", "section-heading");
  el.append(node("p", "eyebrow", eyebrow), node("h2", "", title));
  if (lead) el.append(node("p", "lead", lead));
  return el;
}
function chips(values, cls = "chips") {
  const el = node("ul", cls);
  values.forEach((v, i) => {
    const chip = node("li", "chip", v);
    chip.style.setProperty("--i", i);
    el.append(chip);
  });
  return el;
}
function list(values, cls = "") {
  const ul = node("ul", cls);
  values.forEach((v) => ul.append(node("li", "", v)));
  return ul;
}

function renderChrome(d) {
  const nav = document.querySelector("#navigation");
  nav.replaceChildren();
  nav.setAttribute("aria-label", d.common.mainNav);
  navKeys.forEach((key, i) => {
    const a = link(d.nav[i], key);
    if (key === page) a.setAttribute("aria-current", "page");
    nav.append(a);
  });
  document.querySelector(".brand").href = route("inicio");
  document.querySelector(".skip").textContent = d.common.skip;
  document.querySelector("#footer-copy").textContent = d.common.footer;
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector(".to-top")?.setAttribute("aria-label", d.common.backToTop);
  const langButton = document.querySelector("#language-button");
  langButton.textContent = language === "es" ? "EN" : "ES";
  langButton.setAttribute("aria-label", d.common.switchLanguage);
  document.querySelector("#menu-toggle").setAttribute("aria-label", d.common.menu);
  document.documentElement.lang = language;
  const copy = d.pages[page];
  document.title = `Jazmin Quispe | ${page === "inicio" ? copy.title : d.nav[navKeys.indexOf(page)]}`;
  document.querySelector('meta[name="description"]').content = copy.lead;
  document.querySelectorAll(".portrait-img").forEach((img) => {
    img.alt = d.common.portrait;
  });
}

function renderBanner(d) {
  const root = document.querySelector("#page-banner");
  if (!root) return;
  const copy = d.pages[page];
  root.replaceChildren(
    node("p", "eyebrow", copy.eyebrow),
    node("h1", "", copy.title),
    node("p", "lead", copy.lead),
  );
}

function renderHome(d) {
  const h = d.home;
  const copy = document.querySelector("#hero-copy");
  const title = node("h1", "hero-title");
  title.append(node("span", "hero-greeting", h.greeting), node("span", "hero-name", "Jazmin Quispe Berrocal"));
  const rotator = node("p", "hero-rotator");
  const word = node("span", "rotator-word");
  word.id = "rotator-word";
  rotator.append(node("span", "", `${h.rotatorLabel} `), word);
  rotator.setAttribute("aria-hidden", "true");
  const actions = node("div", "actions");
  const primary = link(d.common.viewExperience, "experiencia", "button");
  primary.append(icon("arrow"));
  actions.append(primary, link(d.common.contactMe, "contacto", "button button-ghost"));
  const social = external("", profile.linkedin, "hero-social");
  social.append(icon("linkedin"), node("span", "", profile.linkedinLabel));
  copy.replaceChildren(
    node("p", "eyebrow", h.eyebrow),
    title,
    rotator,
    node("p", "sr-only", `${h.rotatorLabel}: ${h.rotator.join(", ")}`),
    node("p", "hero-summary", h.summary),
    actions,
    social,
  );
  startRotator(h.rotator);

  const badges = document.querySelector("#hero-badges");
  badges.replaceChildren(
    ...h.badges.map((b) => {
      const badge = node("div", "hero-badge");
      badge.append(node("strong", "", b.value), node("span", "", b.label));
      return badge;
    }),
  );

  document.querySelector("#marquee-label").textContent = h.marqueeLabel;
  const track = document.querySelector("#marquee-track");
  track.replaceChildren();
  // Dos copias para que el desplazamiento sea continuo
  [0, 1].forEach((copyIndex) => {
    const ul = node("ul", "marquee-list");
    if (copyIndex) ul.setAttribute("aria-hidden", "true");
    h.marquee.forEach((name) => ul.append(node("li", "", name)));
    track.append(ul);
  });

  const stats = document.querySelector("#home-stats");
  stats.replaceChildren(heading(h.impactEyebrow, h.impactTitle));
  const grid = node("div", "stat-grid");
  h.stats.forEach((s) => {
    const stat = node("article", "stat");
    const number = node("p", "stat-number");
    const visual = node("span");
    visual.setAttribute("aria-hidden", "true");
    const count = node("span", "count", canAnimate() ? "0" : String(s.value));
    count.dataset.target = s.value;
    visual.append(s.prefix, count, s.suffix);
    number.append(visual, node("span", "sr-only", `${s.prefix}${s.value}${s.suffix}`));
    stat.append(number, node("p", "stat-label", s.label), node("p", "stat-source", s.source));
    grid.append(stat);
  });
  stats.append(grid);

  renderGallery(d);

  const areas = document.querySelector("#home-areas");
  areas.replaceChildren(heading(h.areasEyebrow, h.areasTitle));
  const areaGrid = node("div", "area-grid");
  h.areas.forEach((a, i) => {
    const card = node("article", "card area");
    const more = link(a.cta, a.page, "text-link", a.hash);
    more.append(icon("arrow"));
    card.append(
      node("span", "area-number", String(i + 1).padStart(2, "0")),
      node("h3", "", a.title),
      node("p", "", a.text),
      more,
    );
    areaGrid.append(card);
  });
  areas.append(areaGrid);

  const cta = document.querySelector("#home-cta");
  const ctaActions = node("div", "actions");
  const linkedinButton = external("", profile.linkedin, "button button-light");
  linkedinButton.append(icon("linkedin"), node("span", "", d.common.linkedin));
  ctaActions.append(linkedinButton, link(d.common.contactMe, "contacto", "button button-outline-light"));
  const ctaCopy = node("div");
  ctaCopy.append(node("h2", "", h.ctaTitle), node("p", "", h.ctaText));
  cta.replaceChildren(ctaCopy, ctaActions);
}

function renderGallery(d) {
  const h = d.home;
  const head = heading(h.galleryEyebrow, h.galleryTitle, h.galleryLead);
  head.querySelector("h2").id = "gallery-title";
  document.querySelector("#gallery-heading").replaceChildren(head);
  const mosaic = document.querySelector("#mosaic");
  mosaic.replaceChildren();
  for (let t = 0; t < mosaicTiles; t++) {
    const tile = node("li", `tile tile-${t + 1}`);
    const media = node("div", "tile-media");
    h.gallery.forEach((item) => {
      const img = node("img");
      img.src = item.image;
      img.alt = "";
      img.decoding = "async";
      media.append(img);
    });
    tile.append(media, node("div", "tile-caption"));
    mosaic.append(tile);
  }
  showMosaic(false);
  syncGallery();
}
// Cada casilla muestra una foto distinta; al avanzar, las fotos se trasladan
// de casilla con un fundido escalonado
function showMosaic(animated) {
  const items = cvData[language].home.gallery;
  document.querySelectorAll(".tile").forEach((tile, t) => {
    const index = (t + galleryOffset) % items.length;
    const item = items[index];
    const caption = tile.querySelector(".tile-caption");
    const apply = () => {
      tile.querySelectorAll("img").forEach((img, i) => img.classList.toggle("is-shown", i === index));
      const more = node("div", "tile-more");
      const inner = node("div");
      inner.append(node("h3", "", item.title), node("p", "", item.text));
      more.append(inner);
      caption.replaceChildren(node("span", "tile-place", item.place), more);
      caption.classList.remove("is-changing");
    };
    if (!animated) {
      apply();
      return;
    }
    setTimeout(() => {
      caption.classList.add("is-changing");
      setTimeout(apply, 300);
    }, t * 350);
  });
}
function syncGallery() {
  clearInterval(galleryTimer);
  galleryTimer = null;
  const gallery = document.querySelector(".gallery");
  if (!gallery) return;
  const running = !galleryPaused && !galleryHover && !motion.matches && !document.hidden;
  if (running) {
    galleryTimer = setInterval(() => {
      galleryOffset = (galleryOffset + 1) % cvData[language].home.gallery.length;
      showMosaic(true);
    }, galleryDelay);
  }
  const toggle = document.querySelector("#gallery-toggle");
  const c = cvData[language].common;
  toggle.hidden = motion.matches;
  toggle.textContent = galleryPaused ? "▶" : "❚❚";
  toggle.setAttribute("aria-label", galleryPaused ? c.play : c.pause);
  toggle.setAttribute("aria-pressed", String(galleryPaused));
}

function renderAbout(d) {
  const a = d.about;
  const root = document.querySelector("#about-text");
  document
    .querySelector("#about-badge")
    .replaceChildren(node("strong", "", a.badge.value), node("span", "", a.badge.label));
  const facts = node("dl", "facts");
  a.facts.forEach(([term, value]) => {
    const row = node("div", "fact");
    row.append(node("dt", "", term), node("dd", "", value));
    facts.append(row);
  });
  root.replaceChildren(
    ...a.paragraphs.map((p, i) => node("p", i === 0 ? "lead-paragraph" : "copy", p)),
    node("blockquote", "quote", a.quote),
    node("h2", "facts-title", a.factsTitle),
    facts,
  );
}

function renderExperience(d) {
  const root = document.querySelector("#experience-list");
  root.replaceChildren();
  d.experience.forEach((job) => {
    const card = node("article", "card job");
    card.id = job.id;
    if (job.current) card.classList.add("is-current");
    const head = node("header", "job-head");
    const titleBox = node("div");
    const company = node("p", "job-company");
    company.append(node("strong", "", job.company), node("span", "", ` · ${job.location}`));
    titleBox.append(company, node("h2", "job-role", job.role));
    const date = node("p", "job-date");
    if (job.current) date.append(node("span", "live-dot"));
    date.append(job.dates);
    head.append(titleBox, date);
    card.append(head, node("p", "job-context", job.context), list(job.tasks, "job-tasks"));
    if (job.achievements.length) {
      const box = node("div", "achievements");
      box.append(node("h3", "", d.common.achievements), list(job.achievements));
      card.append(box);
    }
    if (job.tools.length) {
      const tools = node("div", "job-tools");
      tools.append(node("h3", "", d.common.tools), chips(job.tools, "chips chips-small"));
      card.append(tools);
    }
    root.append(card);
  });

  const projects = document.querySelector("#project-list");
  projects.replaceChildren(heading(d.projectsEyebrow, d.projectsTitle));
  d.projects.forEach((p) => {
    const card = node("article", "card project");
    const head = node("header", "job-head");
    const titleBox = node("div");
    const meta = node("p", "job-company");
    meta.append(node("strong", "", p.role), node("span", "", ` · ${p.location}`));
    titleBox.append(meta, node("h3", "job-role", p.name));
    head.append(titleBox, node("p", "job-date", p.dates));
    card.append(head, node("p", "job-context", p.intro), list(p.tasks, "job-tasks"));
    projects.append(card);
  });
}

function renderEducation(d) {
  const root = document.querySelector("#education");
  const degrees = node("div", "degree-grid");
  d.education.forEach((e) => {
    const card = node("article", "card degree");
    card.append(node("p", "job-date", e.dates), node("h3", "", e.title), node("p", "degree-school", e.institution));
    degrees.append(card);
  });

  const courses = node("div", "course-list");
  d.courses.forEach((c) => {
    const details = node("details", "course");
    const summary = node("summary");
    summary.append(node("span", "course-title", c.title), node("small", "", c.institution));
    const content = node("div", "course-content");
    content.append(node("p", "", c.description), node("h4", "", d.topicsTitle), list(c.topics, "course-topics"));
    details.append(summary, content);
    courses.append(details);
  });

  const w = d.workshop;
  const workshop = node("article", "card featured");
  workshop.append(node("p", "job-date", `${w.dates} · ${w.institution}`), node("h3", "", w.role), node("p", "copy", w.text));

  root.replaceChildren(
    node("h2", "subheading", d.educationTitle),
    degrees,
    node("h2", "subheading", d.coursesTitle),
    courses,
    node("h2", "subheading", d.workshopTitle),
    workshop,
  );
}

function renderSkills(d) {
  const root = document.querySelector("#skills");
  const groups = d.skillGroups.map((g, i) => {
    const card = node("article", "card skill-group");
    card.append(
      node("span", "area-number", String(i + 1).padStart(2, "0")),
      node("h2", "", g.title),
      chips(g.items),
    );
    return card;
  });
  const langCard = node("article", "card skill-group languages");
  langCard.append(node("h2", "", d.languagesTitle));
  d.languages.forEach((l) => {
    const row = node("div", "language-row");
    const top = node("div", "language-top");
    top.append(node("h3", "", l.name), node("span", "level", l.level));
    const meter = node("div", "meter");
    meter.setAttribute("aria-hidden", "true");
    const fill = node("span");
    fill.style.setProperty("--level", `${l.percent}%`);
    meter.append(fill);
    const info = node("div", "language-info");
    info.append(top, meter);
    row.append(node("span", "language-code", l.code), info);
    langCard.append(row);
  });
  root.replaceChildren(...groups, langCard);
}

function renderContact(d) {
  const c = d.contact;
  const root = document.querySelector("#contact");
  const grid = node("div", "contact-grid");
  const item = (iconName, title, value, href) => {
    const card = node(href ? "a" : "div", "card contact-card");
    if (href) {
      card.href = href;
      if (href.startsWith("http")) {
        card.target = "_blank";
        card.rel = "noopener noreferrer";
      }
    }
    card.append(icon(iconName, "contact-icon"), node("h2", "", title), node("p", "", value));
    if (href) card.append(icon("arrow", "contact-arrow"));
    return card;
  };
  grid.append(
    item("linkedin", c.linkedinTitle, profile.linkedinLabel, profile.linkedin),
    item("mail", c.emailTitle, profile.email, `mailto:${profile.email}`),
    item("pin", c.locationTitle, c.location),
  );
  root.replaceChildren(grid, node("p", "contact-note", c.note));
}

function render() {
  const d = cvData[language];
  renderChrome(d);
  renderBanner(d);
  const renderers = {
    inicio: renderHome,
    "sobre-mi": renderAbout,
    experiencia: renderExperience,
    formacion: renderEducation,
    habilidades: renderSkills,
    contacto: renderContact,
  };
  renderers[page](d);
  prepareReveal();
}

function startRotator(words) {
  const el = document.querySelector("#rotator-word");
  if (!el) return;
  clearTimeout(rotatorTimer);
  if (motion.matches) {
    el.textContent = words[0];
    return;
  }
  let word = 0;
  let chars = 0;
  let deleting = false;
  const tick = () => {
    const text = words[word];
    chars += deleting ? -1 : 1;
    el.textContent = text.slice(0, chars);
    let delay = deleting ? 30 : 65;
    if (!deleting && chars === text.length) {
      deleting = true;
      delay = 2400;
    } else if (deleting && chars === 0) {
      deleting = false;
      word = (word + 1) % words.length;
      delay = 300;
    }
    rotatorTimer = setTimeout(tick, delay);
  };
  tick();
}

function countUp(el) {
  const target = Number(el.dataset.target);
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / 1400);
    el.textContent = Math.round(target * (1 - (1 - t) ** 3));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function prepareReveal() {
  revealObserver?.disconnect();
  inViewObserver?.disconnect();
  const animate = canAnimate();
  document.documentElement.classList.toggle("motion-ok", animate);
  const els = [...document.querySelectorAll(".card,.course,.stat,.section-heading,.subheading,.cta-band")];
  els.forEach((el) => el.classList.remove("reveal-pending", "is-visible"));
  const groups = [...document.querySelectorAll(".chips,.meter,.stat-grid")];
  if (!animate) {
    groups.forEach((el) => el.classList.add("is-in"));
    return;
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-visible");
        revealObserver.unobserve(el);
        // Quita las clases al terminar para que el hover no herede el retardo
        setTimeout(() => el.classList.remove("reveal-pending", "is-visible"), 1200);
      });
    },
    { threshold: 0.08 },
  );
  els.forEach((el) => {
    if (el.getBoundingClientRect().top >= window.innerHeight) {
      const index = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--d", `${Math.min(index, 3) * 90}ms`);
      el.classList.add("reveal-pending");
      revealObserver.observe(el);
    }
  });
  inViewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        entry.target.querySelectorAll(".count").forEach(countUp);
        inViewObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.3 },
  );
  groups.forEach((el) => inViewObserver.observe(el));
}

// Menú móvil
const nav = document.querySelector("#navigation");
const menu = document.querySelector("#menu-toggle");
function closeMenu() {
  nav.classList.remove("is-open");
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () => {
  menu.setAttribute("aria-expanded", String(nav.classList.toggle("is-open")));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("is-open")) {
    closeMenu();
    menu.focus();
  }
});

// Cambio de idioma
document.querySelector("#language-button").addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  try {
    localStorage.setItem("jazmin-language", language);
  } catch {}
  const url = new URL(location.href);
  url.searchParams.set("lang", language);
  try {
    history.replaceState(null, "", url);
  } catch {}
  closeMenu();
  if (document.startViewTransition && !motion.matches) {
    document.startViewTransition(render);
  } else {
    render();
  }
});

motion.addEventListener("change", () => {
  prepareReveal();
  if (page === "inicio") {
    startRotator(cvData[language].home.rotator);
    syncGallery();
  }
});

// Mosaico: pausa con el botón o al pasar el ratón (para leer las leyendas)
const galleryEl = document.querySelector(".gallery");
if (galleryEl) {
  const mosaic = document.querySelector("#mosaic");
  document.querySelector("#gallery-toggle").addEventListener("click", () => {
    galleryPaused = !galleryPaused;
    syncGallery();
  });
  const hover = (state) => () => {
    galleryHover = state;
    syncGallery();
  };
  mosaic.addEventListener("pointerenter", hover(true));
  mosaic.addEventListener("pointerleave", hover(false));
  document.addEventListener("visibilitychange", syncGallery);
}

// Foto de perfil: si no se encuentra, se quedan las iniciales
document.querySelectorAll(".portrait-img").forEach((img) => {
  const frame = img.closest(".portrait");
  img.addEventListener("error", () => frame.classList.add("no-photo"));
  img.addEventListener("load", () => frame.classList.add("has-photo"));
  img.src = profile.photos[img.dataset.photo || "home"];
});

// Barra de progreso, cabecera, botón volver arriba y línea de tiempo
const header = document.querySelector(".header");
const progressBar = node("div", "scroll-progress");
progressBar.setAttribute("aria-hidden", "true");
document.body.prepend(progressBar);
const toTop = node("button", "to-top", "↑");
toTop.type = "button";
document.body.append(toTop);
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: motion.matches ? "auto" : "smooth" });
});
let scrollTicking = false;
function onScroll() {
  scrollTicking = false;
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  header.classList.toggle("is-scrolled", y > 10);
  toTop.classList.toggle("is-visible", y > 600);
  const timeline = document.querySelector(".timeline");
  if (timeline) {
    const r = timeline.getBoundingClientRect();
    const p = (window.innerHeight * 0.65 - r.top) / r.height;
    timeline.style.setProperty("--progress", Math.min(1, Math.max(0, p)));
  }
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
window.addEventListener("resize", onScroll);

render();
// El contenido se genera con JS: el salto a #ancla se hace tras pintarlo
if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
onScroll();
