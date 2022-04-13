//-------------- MENU SHOW HIDDEN---------------//
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

//-------------- QUESTION SHOW HIDDEN---------------//

const questions = document.querySelectorAll(".question-content");
questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
