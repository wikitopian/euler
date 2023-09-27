/*
const chunk = ((arr, size) => arr.reduce((c, n, i) => {
  c?.[Math.floor(i / size)] ? c[Math.floor(i / size)].push(n) : c.push([n]);
  return c;
}, []));
*/

const chunk = (arr, size) => {
  const chk = [];
  for (let i = 0; i < arr.length; i += size) chk.push(arr.slice(i, i + size));
  return chk;
};

console.log(chunk([1,2,3,4,5], 1));
console.log(chunk([1,9,6,3,2], 3));
console.log(chunk([8,5,3,2,6], 6));
console.log(chunk([], 1));