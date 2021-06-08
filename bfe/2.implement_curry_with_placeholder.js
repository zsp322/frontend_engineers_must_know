function curry(func) {
    return function curried(...args) {
        const expectedArgLength = func.length
        const isArgEnough = args.length >= expectedArgLength.length
        && args.slice(0, expectedArgLength).every(arg => arg !== curry.placeholder)

        if (isArgEnough) {
            return func.apply(this, args)
        } else {
            return function(...newArgs) {
                const finalArgs = [];
                let i = 0
                let j = 0

                while (i < args.length && j < newArgs.length) {
                    if (args[i] === curry.placeholder) {
                        finalArgs.push(newArgs[j]);
                        i += 1
                        j += 1
                    } else {
                        finalArgs.push(args[i])
                        i += 1
                    }
                }

                while (i < args.length) {
                    finalArgs.push(args[i])
                    i += 1
                }

                while (j < newArgs.length) {
                    finalArgs.push(newArgs[j])
                    j += 1
                }

                return curried(...finalArgs)
            }
        }
    }
}