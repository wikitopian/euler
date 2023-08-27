/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const result = [];

const cancellable = (fn, args, t) => {
  fn(...args);
  const intr = setInterval(() => fn(...args), t);
  return () => clearInterval(intr);
};

const fnX = (x) => x * 2;
const argsX = [4];
const tX = 20;
const cancelT = 110;

const cancel = cancellable(fnX, argsX, tX);
setTimeout(() => clearInterval(cancel), cancelT);

setTimeout(() => console.table(result), cancelT);


/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 20, cancelT = 110
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *   
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":20,"returned":8},
 *                         //      {"time":40,"returned":8},           
 *                         //      {"time":60,"returned":8},
 *                         //      {"time":80,"returned":8},
 *                         //      {"time":100,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)    
 */
