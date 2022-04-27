var swiper = new Swiper(".bonusSwiper", {
  loop: true,
  centeredSlides: false,

  navigation: {
    nextEl: ".swiper-button-bonus",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1.2,
    },
    425: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
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
      slidesPerView: 3,
    },
    375: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
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
  loop: false,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 5,

  navigation: {
    nextEl: ".swiper-button-expert",
  },
});

var swiper = new Swiper(".forecastFootball", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecast",
    prevEl: ".prev-forecast",
  },
});

var swiper = new Swiper(".forecastVolleyball", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecastV",
    prevEl: ".prev-forecastV",
  },
});

var swiper = new Swiper(".forecastTennis", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecastT",
    prevEl: ".prev-forecastT",
  },
});

var swiper = new Swiper(".forecastHockey", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecastH",
    prevEl: ".prev-forecastH",
  },
});

var swiper = new Swiper(".forecastBascetBall", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecastB",
    prevEl: ".prev-forecastB",
  },
});

var swiper = new Swiper(".forecastCyber", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecastC",
    prevEl: ".prev-forecastC",
  },
});

var swiper = new Swiper(".forecastOther", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  navigation: {
    nextEl: ".next-forecastO",
    prevEl: ".prev-forecastO",
  },
});

/**аккордион в header*/

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
