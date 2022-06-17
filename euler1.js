// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function euler1(rangeMax = 999, rules = []) {
  const range = [...Array(rangeMax).keys()].map((i) => i + 1);

  return range.reduce((prev, curr) => {

    for (const rule of rules) {
      if (curr % rule === 0) return prev + curr;
    }

    return prev;
  }, 0);
}

console.log(euler1(999, [3, 5]));
