var swiper = new Swiper(".teamSwiper", {
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
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    "@1.5": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".testimonialsSwiper", {
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
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
