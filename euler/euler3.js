// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// https://stackoverflow.com/a/53643340/1597023
function getPrimeFactors(max) {
  const factors = [];

  for (let divisor = 2, n = max; n >= 2; divisor += 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
  }

  return factors;
}

function getGreatestPrimeFactor(num = 13195) {
  return getPrimeFactors(num).pop();
}

const startTime = performance.now();

const n = 600851475143;

const answer = getGreatestPrimeFactor(n);

const endTime = performance.now();

console.log(`${n} = > ${answer} | ${endTime - startTime}ms`);
