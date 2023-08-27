/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = function createCounter(orig) {
    let cntr = orig;

    return {
        increment: () => ++cntr,
        decrement: () => --cntr,
        reset: () => {
            cntr = orig;
            return orig;
        }
    }
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4