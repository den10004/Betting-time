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

var swiper = new Swiper(".expertsForecast", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-expert",
  },
  breakpoints: {
    320: {
      slidesPerView: 5.5,
    },
    375: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 8,
    },
  },
});

var swiper = new Swiper(".tabsForecast1", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-expert",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
    },
    375: {
      slidesPerView: 2.5,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const list = document.querySelectorAll(".list");

function accordion(e) {
  e.stopPropagation();
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else if (this.parentElement.parentElement.classList.contains("active")) {
    this.classList.add("active");
  } else {
    for (i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    this.classList.add("active");
  }
}
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", accordion);
}
