const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;

  // document.body.classList.toggle('menu-is-opened');
  document.body.dataset.burger = !open;
});

menu.addEventListener('click', function() {
  menu.hidden = !menu.hidden;
  toggleMenu.setAttribute('aria-expanded', !open);
  document.body.dataset.burger = !open;
})



