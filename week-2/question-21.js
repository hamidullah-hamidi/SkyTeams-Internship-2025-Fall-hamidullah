// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Sum of digits

// Description: Calculate the sum of all digits of a number.
// Example:
// Input:
// 123
// Output:
// 6

function sumDigits(num) {
  let sum = 0;

  while (num !== 0) {
    sum += num % 10;

    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumDigits(123));

module.exports = sumDigits;
