// The sum of the squares of the first ten natural numbers is,
//   1 ** 2 + 2 ** 2 + ... + 10 ** 2 = 385
// The square of the sum of the first ten natural numbers is,
//   (1 + 2 + ... + 10) ** 2 = 55 ** 2 = 3025
// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is
//   3025 - 385 = 2640
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

function getSumOfSquareDifference(naturalNums = 100) {
  if (!Number.isInteger(naturalNums)) throw new RangeError("must be integer");
  if (naturalNums <= 1) throw new RangeError("must be greater than one");

  const numbers = [...Array(naturalNums).keys()].map((n) => n + 1);

  const sumOfSquares = (nums) =>
    nums.map((n) => n ** 2).reduce((prev, curr) => prev + curr, 0);

  const squareOfSums = (nums) =>
    nums.reduce((prev, curr) => prev + curr, 0) ** 2;

  return squareOfSums(numbers) - sumOfSquares(numbers);
}

const answer = getSumOfSquareDifference(10);
console.log(answer);
