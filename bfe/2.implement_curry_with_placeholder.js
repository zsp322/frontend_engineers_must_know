function curry(func) {
    return function curried(...args) {
        const sanitzedArgs = args.slice(0, func.length);

        const hasPlaceHolder = sanitzedArgs.some(arg => arg == curry.placeholder);

        if (!hasPlaceHolder && sanitzedArgs.length == func.length) {
            return func.apply(this, sanitzedArgs);
        }

        return (...args2) => curried.apply(this, mergedArray(sanitzedArgs, args2));
    }
}

function mergedArray(formerArgs, nextArgs) {
    let result = [];

    formerArgs.forEach((arg, idx) => {
        if (nextArgs.length && arg == curry.placeholder) {
            result.push(nextArgs.shift());
        } else {
            result.push(arg);
        }
    })
}

// Solution comes from this link
// https://bigfrontend.dev/problem/implement-curry-with-placeholder/discuss
