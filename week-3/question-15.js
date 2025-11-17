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

  num = num.toString();

  let result = 0;

  const digitsLength = num.length;

  for (let e of num) {
    result += Number(e) ** digitsLength;
  }

  return result === +num;
};

console.log(isArmstrong(153));
