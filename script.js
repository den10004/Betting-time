var swiper = new Swiper(".bonusSwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-bonus",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },

    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".expertsSwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-expert",
  },
  breakpoints: {
    320: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 6,
    },

    1024: {
      slidesPerView: 8,
    },
  },
});
