/**
 * @return {number}
 */

const argumentsLength = (...args) => args.reduce(acc => acc + 1, 0);

console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength([5])); // 1