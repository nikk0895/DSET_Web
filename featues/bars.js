document.addEventListener("DOMContentLoaded", function () {
  function updateProducts(category) {
    document.querySelectorAll(".product").forEach((product) => {
      if (product.dataset.category.includes(category) || category === "all") {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  document.querySelectorAll(".tab-button").forEach((tab) => {
    tab.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-button")
        .forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      updateProducts(this.dataset.category);
    });
  });

  // Show default category
  updateProducts("all");
});
