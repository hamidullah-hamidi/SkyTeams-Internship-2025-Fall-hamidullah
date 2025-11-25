// Author: hamidullah hamidi
// Date: 2025/17/11

// Question: Check for Armstrong number

// Description: A number is Armstrong if the sum of its digits raised to the power of the number of
// digits equals the number itself.
// Example:
// Input:
// 153
// Output:
// Armstrong
// Input:
// 123
// Output:
// Not Armstrong

export const isArmstrong = (num) => {
  if (num < 0) return undefined;

  let originalNum = num;
  let result = 0;
  let digits = [];

  while (num !== 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let d of digits) {
    result += d ** digits.length;
  }

  return result === originalNum;
};

console.log(isArmstrong(153));
