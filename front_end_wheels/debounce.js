// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
// that it stalls the performance of the web page.
// In other words, it limits the rate at which a function gets invoked.


// Usage: Resizing -- Not gonna console any message untill user stopping resizing
// Usage: Type in search box -- Not gonna fire API call until user stopping type

// 要理解javascript在单event thread上编程的思想
// Closure
var returnedFunction = debounce(function() {
   console.log("I am testing on debouncing function")
}, 250);
window.addEventListener('resize', returnedFunction);

// 简化版
const debounce = function(func, delay) {
    let deBounceTimer;
    return function executeEvent() {
        const contex = this; // refers to the parent object, which is 'window' in this case
        const args = arguments;

        clearTimeout(inBounce);
        deBounceTimer = setTimeout(() => func.apply(contex, args), delay);
    }
}