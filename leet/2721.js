/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

const promiseAll = async (fns = []) => new Promise((resolve) => {
  const start = performance.now();
  const resolved = [];
  const rejected = [];

  fns.forEach((fn) => {
    fn().then((a) => {
      resolved.push(a);
    })
    .catch((e) => {
      rejected.push(e);
    });  
  });

  resolved.push(5);

  resolve({t: performance.now() - start, resolved, rejected})
});



const ps = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];

/*
const ps = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];
*/

/*
const ps = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];
*/


const p1 = promiseAll(ps);
p1.then(console.log);