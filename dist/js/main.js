const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector(".navbar-links");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

nav.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
});
