const calendlyUrl = "https://calendly.com/pressflow/30min";

function openCalendly() {
  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: calendlyUrl });
    return;
  }

  window.open(calendlyUrl, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-calendly]").forEach((button) => {
  button.addEventListener("click", openCalendly);
});

const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeNav() {
  document.body.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

toggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});
