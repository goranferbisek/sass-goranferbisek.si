const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");
const topButton = document.querySelector(".top-button");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

nav.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
});

topButton.addEventListener('click', () => {
  console.log(document.documentElement.scrollTop);

  document.documentElement.scrollTop = 0;
});

function topButtonVisibility() {

}
