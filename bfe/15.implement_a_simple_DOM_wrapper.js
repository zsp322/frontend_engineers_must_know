/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    return new Wrapper(el);
}


class Wrapper {
    constructor(el) {
        this.el = el;
    }

    css(propertyName, value) {
        this.el.style[propertyName] = value;
        return this;
    }
}