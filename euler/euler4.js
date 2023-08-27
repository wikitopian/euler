// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
  const digitArray = String(num).split("");

  for (let i = 0; i < digitArray.length / 2; i += 1) {
    if (digitArray[i] !== digitArray[digitArray.length - i - 1]) return false;
  }

  return true;
}

function getLargestPalindrome(digits = 2) {
  if (digits < 2) throw new RangeError("Minimum digits: 2");

  const maxFactor = 10 ** digits - 1;
  const maxProduct = maxFactor ** 2;

  for (let product = maxProduct; product > maxFactor * 2; product -= 1) {
    if (isPalindrome(product)) {
      for (let factor = maxFactor; factor > maxFactor / 10; factor -= 1) {
        if (product / factor <= maxFactor) {
          if (product % factor === 0) return product;
        }
      }
    }
  }

  return null;
}

const answer = getLargestPalindrome(3);
console.log(answer);
