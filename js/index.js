document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.nav');

  burgerMenu.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.footer-burger-menu');
  const menu = document.querySelector('.footer-nav');

  burgerMenu.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});