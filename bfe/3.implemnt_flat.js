// 这题比较简单
// 就是简单的leetcode题，不要害怕

function flat (arr, depth = 1) {
    const result = [];
    const stack = [...arr.map(item => ([item, depth]))];

    while (stack.length > 0) {
        const [top, depth] = stack.pop();

        if (Array.isArray(top) && depth > 0) {
            stack.push(...top.map(item => ([item, depth - 1])))
        } else {
            result.push(top)
        }
    }

    return result.reverse();
}