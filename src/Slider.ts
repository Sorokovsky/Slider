interface Options {
    buttonPrev?: string;
    buttonNext?: string;
    canSwipe?: boolean;
    loop?: boolean;
}
class Slider {
    private readonly wrapper: HTMLElement;
    private readonly slidesContainer: HTMLElement;
    private currentSlide: number = 0;
    private slides: Element[];
    public options: Options;
    constructor(wrapperSelector: string, slidesContainerSelector: string, options: Options = {}){
        this.wrapper = document.querySelector(wrapperSelector)!;
        this.slidesContainer = document.querySelector(slidesContainerSelector)!;
        this.slides = Array.from(this.slidesContainer.children);
        this.options = options; 
        this.init();
    }
    private tryEnableButtons(){
        const { buttonNext, buttonPrev } = this.options;
        if (buttonNext) {
            const next: Element = document.querySelector(buttonNext)!;
            next.classList.add('slider__button-next');
            next.classList.add('slider__button');
            next.addEventListener('click', this.nextSlide);
        }
        if (buttonPrev) {
            const prev: Element = document.querySelector(buttonPrev)!;
            prev.classList.add('slider__button-prev');
            prev.classList.add('slider__button');
            prev.addEventListener('click', this.prevSlide);
        }
    }
    private setContainerGeometry(){
        const container: HTMLElement = this.slidesContainer;
        let width: number = 0;
        for (let i: number = 0; i < this.slides.length; i++) {
            let slide: HTMLElement = this.slides[i] as HTMLElement;
            width += slide.offsetWidth;
        }
        this.slidesContainer.style.width = width + "px";
        this.wrapper.style.height = this.slidesContainer.offsetHeight + "px";
    }
    public init(): void{
        this.tryEnableButtons();
        this.setContainerGeometry();
    }
    public nextSlide(): void{

    }
    public prevSlide(): void{

    }
    public setSlide(index: number): void{

    }
}