
/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
    // your code here
    let timer = null;

    return function(...args) {
        window.clearTimeout(timer);

        timer = window.setTimeout(() => {
            func.call(this,...args);
        }, wait);
    }
}