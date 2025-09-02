// Add current year in footer
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#year").textContent = new Date().getFullYear();
});