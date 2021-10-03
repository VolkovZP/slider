'use strict';

class Slider {
    constructor(images, currentIndex = 0) {
        if (!Array.isArray(images)) {
            throw TypeError('')
        }
        this._images = images;
        this.currentIndex = currentIndex;
    }
    get images() {
        return this._images;
    }
    set currentIndex(v) {
        if (typeof v !== 'number') {
            throw new TypeError();
        }
        this._currentIndex = v;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    get currentSlide() {
        return this._images[this.currentIndex];
    }
    next() {
        this.currentIndex = (this.currentIndex + 1) % this._images.length;
        return this.currentSlide;
    }
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this._images.length) % this._images.length;
        return this.currentSlide;
    }
}


