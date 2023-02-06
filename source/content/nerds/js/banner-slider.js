const SLIDER_DALAY = 2000;
const NUMBER_OF_SLIDES = 3

const slider = document.querySelector('.main-slider');
const slides = document.querySelectorAll('.main-slider__slide');
const sliderToggleBuutons = document.querySelectorAll('.main-slider__toggle');
let mouseOverSlider = false;
let sliderCounter = 1;

function setSliderToggle() {
  sliderToggleBuutons.forEach((element, index) => {
    element.addEventListener('click', (() => (showSlide(index + 1))));
  })
};

function showSlide(number) {
  slides.forEach((element, index) => {
    if (number === (index + 1)) {
      element.classList.remove('hidden');
      sliderToggleBuutons[index].classList.add('main-slider__toggle--active');
      sliderCounter = index + 1;
    } else {
      element.classList.add('hidden')
      sliderToggleBuutons[index].classList.remove('main-slider__toggle--active');
    }
  })
};

function swipeSlide() {
  if (!mouseOverSlider) {
    showSlide(sliderCounter);
    sliderCounter++;
    if (sliderCounter > NUMBER_OF_SLIDES) {
      sliderCounter = 1;
    }
  }
};

slider.addEventListener('mouseenter', () => { mouseOverSlider = true; });
slider.addEventListener('mouseleave', () => { mouseOverSlider = false; });

setSliderToggle();

setInterval(swipeSlide, SLIDER_DALAY);
