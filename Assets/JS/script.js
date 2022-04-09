//-------------- MENU SHOW Y HIDDEN---------------//
const navMenu = document.getElementById("nav__menu"),
  navClose = document.getElementById("nav__close"),
  navToggle = document.getElementById("nav__toggle");

//---------- MENU SHOW---------------------//
// Validate if constant exists//
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//---------- MENU HIDDEN --------------//
// Validate if constant exists//
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
