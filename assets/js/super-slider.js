import Swiper from "./swiper.js";
import KeyControl from "./key-control.js";
import Dragger from "./dragger.js";
import Slider from "./slider.js";

class SuperSlider extends Slider {
    constructor() {
        super();
        this._swiper = new Swiper(this);
        this._key_control = new KeyControl(this);
        this._dragger = new Dragger(this);
    }
}

export default SuperSlider;