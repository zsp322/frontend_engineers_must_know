function throttled(func, delay) {
    let inThrottle;
    return function executetedFunction {
        const args= arguments;
        const context = this;

        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, delay);
        }
    }
}