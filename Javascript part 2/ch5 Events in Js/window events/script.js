const output = document.getElementById("output");

// Load Event
window.addEventListener("load", () => {
  output.textContent = "✅ Page fully loaded!";
});

// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready (before images/scripts load)");
});

// Resize Event
window.addEventListener("resize", () => {
  output.textContent = `📏 Window resized to: ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener("scroll", () => {
  output.textContent = `🖱️ Scrolled to: ${window.scrollY}px from top`;
});

// Before Unload Event
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Are you sure you want to leave?";
});

// Focus & Blur Events
window.addEventListener("focus", () => {
  output.textContent = "🔵 Window is focused";
});

window.addEventListener("blur", () => {
  output.textContent = "⚪ Window lost focus";
});

// Error Event
window.addEventListener("error", (e) => {
  output.textContent = `❌ Error: ${e.message}`;
});

// Hash Change Event
window.addEventListener("hashchange", () => {
  output.textContent = `🔗 Hash changed to: ${location.hash}`;
});

// Online / Offline Events
window.addEventListener("online", () => {
  output.textContent = "🌐 You are online";
});

window.addEventListener("offline", () => {
  output.textContent = "🚫 You are offline";
});
