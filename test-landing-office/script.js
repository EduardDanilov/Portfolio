const rangeSlider = document.querySelector('.range-block__range-slider');
const rangeSliderPercentElement = document.querySelector('.text-range__percent');
const burgerMenu = document.querySelector(".menu__burger");
const navigationMenu = document.querySelector(".nav-list");

rangeSlider.addEventListener('input', () => {
    rangeSliderPercentElement.textContent = `${rangeSlider.value}`;
});

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-opened");
    navigationMenu.classList.toggle("list-opened");
});