var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
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
