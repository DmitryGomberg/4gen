/* Django: подключить через {% static 'js/script.js' %} */

const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu__close');
const overlay = document.querySelector('.mobile-menu__overlay');
const headerNav = document.querySelector('.header__nav ul');
const headerAuth = document.querySelector('.header__auth');
const headerBtn = document.querySelector('.header__btn');

const BREAKPOINT = 980;

function moveToMobile() {
  if (window.innerWidth <= BREAKPOINT && !mobileMenu.contains(headerNav)) {
    mobileMenu.appendChild(headerNav);
    mobileMenu.appendChild(headerAuth);
    mobileMenu.appendChild(headerBtn);
  }
}

function moveToDesktop() {
  const headerContainer = document.querySelector('.header__container');
  if (window.innerWidth > BREAKPOINT && mobileMenu.contains(headerNav)) {
    document.querySelector('.header__nav').appendChild(headerNav);
    headerContainer.insertBefore(headerAuth, document.querySelector('.header__btn'));
    headerContainer.insertBefore(headerBtn, burger);
  }
}

function handleResize() {
  if (window.innerWidth <= BREAKPOINT) {
    moveToMobile();
  } else {
    moveToDesktop();
  }
}

burger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
}

window.addEventListener('resize', handleResize);
handleResize();