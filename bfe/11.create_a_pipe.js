// pipe([
//     times(2),
//     times(3)
//   ])  
//   // x * 2 * 3
  
//   pipe([
//     times(2),
//     plus(3),
//     times(4)
//   ]) 
//   // (x * 2 + 3) * 4
  
//   pipe([
//     times(2),
//     subtract(3),
//     divide(4)
//   ]) 
//   // (x * 2 - 3) / 4

/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
    // your code here
    return function(args) {
        return funcs.reduce((result, func) => {
            return func.call(this, result);
        }, args);
    }
}