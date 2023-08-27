/**
 * @param {Function[]} functions
 * @return {Function}
 */

/*
const compose = (fns) => (x) => {
  for (let fn = fns.pop(); fn; fn = fns.pop()) x = fn(x);
  return x;
}
*/

const compose = (fns) => (x) => fns.reduceRight((a, fn) => fn(a), x);

// const fnx = compose([(x) => x + 1, (x) => 2 * x]);
const fnx = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fnx(4)); // 9
