/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const filter = (a0, fn, a1 = []) => {
  for (let i = 0; i < a0.length; i += 1) if (fn(a0[i], i)) a1.push(a0[i]);
  return a1;
};

const arr = [0,10,20,30];
const fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn));