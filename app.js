// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const menuLinks = document.getElementById("menuLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = menuLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Theme toggle (stores preference)
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

function setTheme(mode) {
  // mode: "dark" | "light"
  if (mode === "light") {
    root.style.setProperty("--bg", "#f7f8fb");
    root.style.setProperty("--panel", "#ffffff");
    root.style.setProperty("--text", "#0e1020");
    root.style.setProperty("--muted", "#4b5268");
    root.style.setProperty("--line", "#dfe3ef");
    root.style.setProperty("--shadow", "0 10px 30px rgba(0,0,0,.08)");
    themeBtn.textContent = "🌞";
  } else {
    root.style.setProperty("--bg", "#0b0c10");
    root.style.setProperty("--panel", "#11131a");
    root.style.setProperty("--text", "#e8eaf0");
    root.style.setProperty("--muted", "#a9afbf");
    root.style.setProperty("--line", "#24283a");
    root.style.setProperty("--shadow", "0 10px 30px rgba(0,0,0,.25)");
    themeBtn.textContent = "🌙";
  }
  localStorage.setItem("sajilo_theme", mode);
}

const saved = localStorage.getItem("sajilo_theme");
setTheme(saved || "dark");

themeBtn?.addEventListener("click", () => {
  const current = localStorage.getItem("sajilo_theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});
