/**
 * @param {string} val
 * @return {Object}
 */

const expect = (v) => ({
  toBe: (t) => (t === v ? true : (() => { throw new Error(`Not Equal`) })()),
  notToBe: (t) => (t !== v ? true : (() => { throw new Error(`Equal`) })()),
});

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
console.log(expect(5).toBe(null)); // Not Equal

