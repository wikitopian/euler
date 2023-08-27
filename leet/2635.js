/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = (a0, fn, a1 = []) => {
  for (; a1.length < a0.length; a1.push(fn(a0[a1.length], a1.length)));
  return a1;
};

const xn = [-10, 0, 10];
function plus10(n) {
  return n + 10;
}
console.log(map(xn, plus10));
