class Swiper {
    constructor(slider) {
        this._slider = slider;
        this._touchStart = 0;
        this._touchEnd = 0;

        this._recordTouchEnd = this._recordTouchEnd.bind(this);
        this._recordTouchStart = this._recordTouchStart.bind(this);
        this._swipe = this._swipe.bind(this);
        this._initListeners();
    }

    _initListeners() {
        this._slider._SLIDES.forEach((slide) => {
            slide.addEventListener('touchstart', this._recordTouchStart);
            slide.addEventListener('touchmove', this._recordTouchEnd);
            slide.addEventListener('touchend', this._swipe);
        });
    }

    _recordTouchStart(event) {
        this._touchStart = event.touches[0].clientX;
    }

    _recordTouchEnd(event) {
        this._touchEnd = event.touches[0].clientX;
    }

    _swipe() {
        this._slider.slideDirection(this._touchEnd - this._touchStart, 50);
    }
}

export default Swiper;
