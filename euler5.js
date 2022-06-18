// 2520 is the smallest number that can be divided
// by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?

const isEvenlyDivisible = (range, n) =>
  range.reduce((prev, curr) => (n % curr === 0 ? prev : false), true);

function getSmallestEvenlyDivisible(rangeMax = 10) {
  if (!Number.isInteger(rangeMax)) throw new RangeError("must be an integer");
  if (rangeMax < 2) throw new RangeError("must be greater than 1");

  const range = [...Array(rangeMax).keys()].map((n) => n + 1);
  const maxCandidate = range.reduce((product, num) => product * num, 1);

  return range.reverse().reduce((candidate, divisor) => {
    if (candidate % divisor !== 0) return candidate;

    if (isEvenlyDivisible(range, candidate / divisor)) {
      return candidate / divisor;
    }

    return candidate;
  }, maxCandidate);
}

const answer = getSmallestEvenlyDivisible(20);
console.log(answer);
