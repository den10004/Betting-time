var swiper = new Swiper(".bannerSwiper", {
  loop: true,
  centeredSlides: false,
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
});

var swiper = new Swiper(".bonusSwiper", {
  loop: true,
  centeredSlides: false,
  spaceBetween: 20,

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
      slidesPerView: 2,
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
/*
var swiper = new Swiper(".tabsForecast1", {
  loop: false,
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 5,

  navigation: {
    nextEl: ".swiper-button-expert",
  },
});*/

var swiper = new Swiper(".forecastFootball", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastF",
    prevEl: ".prev-forecastF",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".forecastVolleyball", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastV",
    prevEl: ".prev-forecastV",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".forecastTennis", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastT",
    prevEl: ".prev-forecastT",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".forecastHockey", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastH",
    prevEl: ".prev-forecastH",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".forecastBascetBall", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastB",
    prevEl: ".prev-forecastB",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".forecastCyber", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastC",
    prevEl: ".prev-forecastC",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".forecastOther", {
  loop: true,
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-forecastO",
    prevEl: ".prev-forecastO",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
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
