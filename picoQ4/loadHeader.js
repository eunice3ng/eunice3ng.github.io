// js/load-header.js
document.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("../index/header.html") // adjust this path based on your folder structure
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;

        // Optional: re-bind theme toggle button if it's inside the header
        const toggle = document.getElemesntById("theme-toggle");
        if (toggle) {
          toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
          });
        }
      })
      .catch(err => console.error("Failed to load header:", err));
  }
});
