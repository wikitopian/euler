/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const fnX = (x) => x * 5;
const argsX = [2];
const tX = 20;


const cancellable = (fn, args, t) => {
    let cancelled = false;    

    const start = Math.floor(performance.now());
    const result = [];

    setTimeout(() => {
      if (cancelled) return;

      const diff = Math.floor(performance.now() - start);
      result.push({ time: diff, returned: fn(...args) });
    }, t);

    return () => { cancelled = true };
};

const cancel = cancellable(fnX, argsX, tX);

setTimeout(() => console.table(result), 5000);


/*
const result = [];

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const cancelT = 50;
const maxT = Math.max(t, cancelT);
setTimeout(() => cancel(), cancelT);

// [{"time":20,"returned":10}]
setTimeout(() => console.log(result), maxT + 15);

*/