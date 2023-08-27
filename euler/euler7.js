// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
// What is the 10,001st prime number?

const isPrimeMemoized = (primes = [2], n = 2) => {
  const nSquared = Math.floor(Math.sqrt(n));

  return !primes.some((prime) => prime <= nSquared && n % prime === 0);
};

const getNthPrime = (nth = 2) => {
  if (!Number.isInteger(nth)) throw new RangeError("must be integer");
  if (nth <= 1) throw new RangeError("must be greater than one");

  const primes = [2];

  for (let i = 3; primes.length < nth; i += 1) {
    if (isPrimeMemoized(primes, i)) primes.push(i);
  }

  return primes.pop();
};

console.log(getNthPrime(10001));
