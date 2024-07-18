const btn = document.querySelector(".header__btn");

btn.addEventListener("click", () => {
  document.querySelector(".header__nav").classList.toggle("header__nav--show");
})