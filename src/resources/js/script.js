// https://properprogramming.com/tools/converters/jquery-to-javascript-remover-converter-online-alternative-version-2/
document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.mobile-menu').addEventListener('click', function(e){
    e.preventDefault();

    let menu_btn = document.querySelector('.menu-btn') // Using a class instead, see note below.
    menu_btn.classList.toggle('menu-active');

    let main_nav = document.querySelector('.main-nav') // Using a class instead, see note below.
    main_nav.classList.toggle('menu-active');

  });


});


const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 85,
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
   1200: {

        slidesPerView: 2,

    }
}

});
