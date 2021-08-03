let nav = document.querySelector('.header__nav-js');
let burger = document.querySelector('.header__burger-js');

burger.onclick = function() {
    nav.classList.toggle('header__nav--open');
}