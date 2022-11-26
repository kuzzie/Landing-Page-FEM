const navToggleButton = document.querySelector(".mobile-nav-toggle");
const navBar = document.querySelector(".primary-nav");

navToggleButton.addEventListener("click", () => {
  navBar.classList.toggle("nav-active");
});