/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

/*
const addTwoPromises = async (promise1, promise2) => {

  const a = await promise1;
  const b = await promise2;

  return a + b;
};
*/

const addTwoPromises = (promise1, promise2) => Promise.all([promise1, promise2])
  .then(ps => ps.reduce((x, y) => x + y, 0));

const promiseA = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promiseB = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promiseA, promiseB).then(x => console.log(x)); // 7