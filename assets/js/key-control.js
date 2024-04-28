class KeyControl {
    _PREVIOUS_KEY = 'ArrowLeft';
    _POWER_KEY = ' ';
    _NEXT_KEY = 'ArrowRight';

    constructor(slider) {
        this._slider = slider;
        this._parseKey = this._parseKey.bind(this);
        this._initListeners();
    }

    _initListeners() {
        document.addEventListener('keydown', this._parseKey);
    }

    _parseKey(event) {
        let keyboard = {
            [this._NEXT_KEY]: this._slider.nextSlide,
            [this._PREVIOUS_KEY]: this._slider.previousSlide,
            [this._POWER_KEY]: this._slider.power
        }
        let action = keyboard[event.key];
        if (action) {
            action();
        }
    }
}

export default KeyControl;
