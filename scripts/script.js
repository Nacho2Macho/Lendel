const menu = document.querySelector(".menu-header");
const menuBtn = document.querySelector(".menu-header__icon");
const headerLogo = document.querySelector(".header__logo");
const buttonLogo = document.querySelector(".button-header");
const body = document.querySelector("body");

function closeBurggerMenu() {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  headerLogo.classList.remove("active");
  buttonLogo.classList.remove("active");
  body.classList.remove("lock");
}

function openBurggerMenu() {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  headerLogo.classList.toggle("active");
  buttonLogo.classList.toggle("active");
  body.classList.toggle("lock");
}

if (menu && menuBtn) {
  menuBtn.addEventListener("click", openBurggerMenu);
  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", closeBurggerMenu);
  });
}

document.addEventListener('keyup', (e) => {
  document.querySelectorAll('input').forEach((item) => {
    item.style.outline = 'none';
  });
  if (e.key == 'Tab' && e.target.closest('input')) {
    e.target.style.outline = 'auto';
  }
})