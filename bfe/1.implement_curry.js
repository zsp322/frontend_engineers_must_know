function sum (a, b, c) {
    return a + b + c;
}

function curry(func) {
    return function curriedInner(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return curriedInner.bind(this, ...args);
        }
    }
}

const curriedSum = curry(sum);

curriedSum(1)(2)(3)