// Author: hamidullah hamidi
// Date: 2025/19/11

// Question:  Convert Decimal to Binary

// Description: Convert a decimal number to its binary representation.
// Example:
// Input:
// 10
// Output:
// 1010

export const convertDecimalToBinary = (num) => {
  if (num === 0) return 0;
  if (num < 0) return 'Insert positive number';

  let binary = '';

  while (num !== 0) {
    let reminder = num % 2;

    binary = reminder + binary;

    num = Math.floor(num / 2);
  }

  return binary;
};

console.log(convertDecimalToBinary(-10));
