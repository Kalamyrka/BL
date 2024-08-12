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

/* Выпадающий список */

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunctionBook1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunctionBook2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunctionBook3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}