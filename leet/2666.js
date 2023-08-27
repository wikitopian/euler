/**
 * @param {Function} fn
 * @return {Function}
 */

const once = (fn, done = false) => (...args) => {
  if (done) return undefined;
  done = true;

  return fn(...args);
};

const fnX = (a,b,c) => (a + b + c)
const onceFn = once(fnX)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn