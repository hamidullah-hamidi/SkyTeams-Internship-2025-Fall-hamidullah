// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Sum of digits of a number

// Description: Calculate the sum of all digits in a given number.
// Example:
// Input:
// 12345
// Output:
// 15

export function sumDigits(num) {
  num = Math.abs(num);

  let sum = 0;

  while (num !== 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumDigits(-12345));
