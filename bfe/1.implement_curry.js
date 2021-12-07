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


// Recursive way

function curry (func) {
    return function curriedInner(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return (...args2) => curriedInner(...args, ...args2)
        }
    }
}

// https://javascript.info/currying-partials
// Store the value in lexical environment
function curried(...args) {
    if (args.length >= func.length) {
        return func(...args);
    } else {
        return function(...args2) {
            return curried.apply(this, args.concat(...args2));
        }
    }
}