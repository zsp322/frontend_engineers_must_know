// Throttle: We don't allow to our functions to execute more than once every X milliseconds

function throttled(func, delay) {
    let inThrottle; // When a function coming, while this variable is false. then no function will be triggered
    return function executetedFunction () {
        const args= arguments;
        const context = this;

        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, delay);
        }
    }
}

var returnedFunction = debounce(function() {
    console.log("I am testing on trottling function")
}, 2500);
window.addEventListener('resize', returnedFunction);

