var swiperTeam = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  // pagination: {
  //  el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
var swiperTestimonials = new Swiper(".testimonialsSwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  autoHeight: true,
  // pagination: {
  //  el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

window.addEventListener("scroll", function () {
  // Получаем высоту блока с классом grid-block
  var gridBlock = document.querySelector(".post-content");
  var gridBlockTop = gridBlock.getBoundingClientRect().top + window.scrollY; // Добавляем смещение по вертикали

  // Получаем высоту верхнего края окна браузера плюс 50px
  var topOffset = window.scrollY - 120;

  // Проверяем, достиг ли пользователь условия
  if (gridBlockTop <= topOffset) {
    // Изменяем цвет текста в блоках sidebar-right и share
    var sidebarRight = document.querySelector(".sidebar-right");
    var sidebarLeft = document.querySelector(".sidebar-left");

    sidebarRight.style.color = "#646a69";
    sidebarRight.style.fill = "#646a69"; // Изменяем цвет текста в блоке sidebar-right
    sidebarLeft.style.color = "#646a69"; // Изменяем цвет текста в блоке share
  } else {
    // Возвращаем исходный цвет текста, если условие не выполнено
    var sidebarRight = document.querySelector(".sidebar-right");
    var sidebarLeft = document.querySelector(".sidebar-left");

    sidebarRight.style.color = "";
    sidebarRight.style.fill = ""; // Возвращаем исходный цвет текста в блоке sidebar-right
    sidebarLeft.style.color = ""; // Возвращаем исходный цвет текста в блоке share
  }
});
