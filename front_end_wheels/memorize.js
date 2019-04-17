// 发现很多javascript的进阶的小轮子都是用closure解决的，closure提供了一个函数的shared memory
// 

function memorize(func) {
    let dic = new Map();
    var slice = Array.prototype.slice;

    return function() {
        var args = slice.call(arguments);

        if (dic.has(args)) return dic.get(args);
        else {
            dic.set(args, func.apply(this, args));
            return dic.get(args);
        }
    }
}


function fibonacci(n) {
    if (n === 0 || n === 1)
      return n;
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
}


const memorizedFib = memorize(fibonacci);


console.log(memorizedFib(10));