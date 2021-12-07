/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */

// In this problem, you are asked to implement a enhanced throttle() which accepts third parameter, option: {leading: boolean, trailing: boolean}

// leading: whether to invoke right away
// trailing: whether to invoke after the delay.

// for the previous example of throttling by 3 dashes

// ─A─B─C─ ─D─ ─ ─ ─ ─ ─ E─ ─F─G

// with {leading: true, trailing: true}, we get as below

// ─A─ ─ ─C─ ─ ─D ─ ─ ─ ─ E─ ─ ─G

// with {leading: false, trailing: true}, A and E are swallowed.

// ─ ─ ─ ─C─ ─ ─D─ ─ ─ ─ ─ ─ ─G

// with {leading: true, trailing: false}, only A D E are kept

// ─A─ ─ ─ ─D─ ─ ─ ─ ─ ─ E

// with {leading: false, trailing: false}, of course, nothing happens.
function throttle(func, wait, option = {leading: true, trailing: true}) {
    // your code here
    let stashed = null;
    let timer = null;

    const startCooling = () => {
      window.setTimeout(check,wait);
    }

    const check = () => {
      timer = null;

      if (stashed != null) {
        func.apply(stashed[0], stashed[1]);
        stashed = null;
        startCooling();
      }
    }


    return function(...args) {
      if (timer != null) {
        if (option.trailing) {
          stashed = [this, args];
        }
        return
      }

      if (option.leading) {
        func.apply(this, args);
        startCooling();
        return
      }

      if (option.trailing) {
        stashed = [this, args];
        startCooling();í
      }
    }

}