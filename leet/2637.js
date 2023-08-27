/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit = (fn, t) => async (...args) => new Promise((resolve, reject) => {
  setTimeout(() => reject(Error("Time Limit Exceeded")), t);
  fn(...args).then(resolve, reject);
});

const t = 150;

const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100)); 
  return n * n;
};

const limited = timeLimit(fn, t);

limited(150)
  .then(console.log)
  .catch(console.log) // "Time Limit Exceeded" at t=100ms
