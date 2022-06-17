// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed
// four million, find the sum of the even-valued terms.

function fibonacci(max = 4000000) {
  if (max <= 2) return [];

  const series = [];

  let [a, b, f] = [0, 1, 1];
  for (let i = 2; f <= max; i += 1) {
    f = a + b;
    a = b;
    b = f;

    if (f <= max) series.push(f);
  }

  return series.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n);
}

const startTime = performance.now();

const n = 4000000;

const answer = fibonacci(n);

const endTime = performance.now();

console.log(`${n} = > ${answer} | ${endTime - startTime}ms`);
