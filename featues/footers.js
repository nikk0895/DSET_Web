document.querySelectorAll(".social-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    alert(`Redirecting to ${this.id}`);
  });
});
