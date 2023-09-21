/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

const promiseAll = async function (fns) {
  return new Promise((resolve, reject, results = []) => {
    fns.map((fn, i) => {
      fn().then((result) => {
        results[i] = result;

        if (Object.keys(results).length === fns.length) resolve(results);
      })
        .catch(reject);
    });
  });
}

const promise = promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100)),
]);

promise.then(console.log); // [42]