const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

let showMenu = false;

//toggle button callback
menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");

    showMenu = false;
  }
});
