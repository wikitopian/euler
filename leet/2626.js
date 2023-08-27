/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = (nums, fn, r) => {
  for (let i = 0; i < nums.length; i += 1) r = fn(r, nums[i]);
  return r;
};

const numsX = [1,2,3,4];
const fnX = function sum(accum, curr) { return accum + curr; };
const initX = 0;
console.log(reduce(numsX, fnX, initX));