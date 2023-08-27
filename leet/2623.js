function memoize(fn) {
  const cache = {};
  return function memoized(...args) {
    const key = JSON.stringify(args);

    if (key in cache) return cache[key];

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const sum = (a, b) => a + b;
const fib = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(2));
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(2));
console.log(memoizedFactorial());
console.log(memoizedFactorial(3));
console.log(memoizedFactorial());
