const menuButton = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

if (menuButton && mainMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentYear = document.querySelector('[data-current-year]');

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
