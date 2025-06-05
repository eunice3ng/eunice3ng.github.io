// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Search filter
document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});
