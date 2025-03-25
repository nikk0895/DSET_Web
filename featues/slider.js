document.querySelector(".logo-slider").addEventListener("mouseover", () => {
  document.querySelector(".logo-track").style.animationPlayState = "paused";
});
document.querySelector(".logo-slider").addEventListener("mouseout", () => {
  document.querySelector(".logo-track").style.animationPlayState = "running";
});
