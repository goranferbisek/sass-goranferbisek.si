const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");
const topButton = document.querySelector(".top-button");


/* navigation functions */
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

nav.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
});


/* top button functions */
topButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
  if (document.documentElement.scrollTop < window.innerHeight) {
    topButton.style.display = 'none';
  } else {
    topButton.style.display = 'block';
  }
}
