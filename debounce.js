// Debounce function is a function only trigger when this
// Usage: var returnedFunction = debounce(function() {
    // All the taxing stuff you do
//}, 250);
// window.addEventListener('resize', returnedFunction);

// func: the function you want to debounce
// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// 要理解javascript在单event thread上编程的思想
// 
function debounce(func, wait, immediate) {
  var timeout; // Record the running event
  return function executeEvent() {
      console.log(timeout);
      var args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(null, arguments);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(null, args);
  }
};

var returnedFunction = debounce(function() {
   console.log("I am testing on debouncing function")
}, 250);
window.addEventListener('resize', returnedFunction);


var matrix = [
    [3,2,3],
    [2,1,2]
]

console.log('row ' + matrix.length);
console.log('col' + matrix[0].length);


// 简化版
const debounce = function(func, delay) {
    let inBounce;

    return function executeEvent() {
        const contex = this;
        const args = arguments;
        clearTimeout(inBounce);
        inBounce = setTimeout(() => func.apply(contex, args), delay);
    }
}