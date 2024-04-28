class Dragger {
    constructor(slider) {
        this._slider = slider;
        this._isDragging = false;
        this._dragStart = 0;

        this._startDragging = this._startDragging.bind(this);
        this._drag = this._drag.bind(this);

        this._initListeners();
    }

    _initListeners() {
        this._slider._SLIDES.forEach((slide) => {
            slide.addEventListener('mousedown', this._startDragging);
            slide.addEventListener('mousemove', this._drag);
            slide.addEventListener('mouseenter', this._slider.pause);
            slide.addEventListener('mouseleave', this._slider.play);
        });
    }

    _drag(event) {
        if (this._isDragging) {
            if (this._slider.slideDirection(event.clientX - this._dragStart, 200)) {
                this._dragStart = event.clientX;
                this._isDragging = false;
            }
        }
    }

    _startDragging(event) {
        this._isDragging = true;
        this._dragStart = event.clientX;
    }
}

export default Dragger;


