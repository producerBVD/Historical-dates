// Инициализация Swiper слайдера для блока исторических дат
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 80,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false,
  on: {
    init: function () {
      updateCounter(this);
    },
    slideChange: function () {
      updateCounter(this);
    },
  },
});

function updateCounter(swiper) {
  const counter = document.querySelector('.swiper-counter');
  if (!counter) return;
  const current = swiper.realIndex + 1;
  const total = swiper.slides.length;
  counter.textContent = `${padNumber(current)}/${padNumber(total)}`;
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}
