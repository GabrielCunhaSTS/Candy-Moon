document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".ul");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
});
