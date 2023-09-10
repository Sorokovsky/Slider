"use strict";
class Slider {
    constructor(wrapperSelector, slidesContainerSelector, options = {}) {
        this.currentSlide = 0;
        this.wrapper = document.querySelector(wrapperSelector);
        this.slidesContainer = document.querySelector(slidesContainerSelector);
        this.slides = Array.from(this.slidesContainer.children);
        this.options = options;
        this.init();
    }
    tryEnableButtons() {
        const { buttonNext, buttonPrev } = this.options;
        if (buttonNext) {
            const next = document.querySelector(buttonNext);
            next.classList.add('slider__button-next');
            next.classList.add('slider__button');
            next.addEventListener('click', this.nextSlide);
        }
        if (buttonPrev) {
            const prev = document.querySelector(buttonPrev);
            prev.classList.add('slider__button-prev');
            prev.classList.add('slider__button');
            prev.addEventListener('click', this.prevSlide);
        }
    }
    setContainerGeometry() {
        const container = this.slidesContainer;
        let width = 0;
        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            width += slide.offsetWidth;
        }
        this.slidesContainer.style.width = width + "px";
        this.wrapper.style.height = this.slidesContainer.offsetHeight + "px";
    }
    init() {
        this.tryEnableButtons();
        this.setContainerGeometry();
    }
    nextSlide() {
    }
    prevSlide() {
    }
    setSlide(index) {
    }
}
const slider = new Slider('.slider', '.slider-container', {
    buttonPrev: '.slider-prev',
    buttonNext: '.slider-next'
});
