/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

const debounce = (fn, t, timer) => (...args) => {
  clearTimeout(timer);
  timer = setTimeout(() => fn(...args), t);
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms