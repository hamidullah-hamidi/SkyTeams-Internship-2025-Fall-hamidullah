// Author: hamidullah hamidi
// Date: 2025/17/11

// question: Power of a number (without built-in function)

// Description: Compute a^b using repeated multiplication.
// Example:
// Input:
// 2, 5
// Output:
// 32

export const powerOfNumber = (num, pow) => {
  if (pow === 0) return 1;
  if (pow < 0) return 1 / Math.pow(num, -pow);

  // way -1
  // return Math.pow(2, 5);

  // way -2
  let result = 1;

  for (let i = 0; i < pow; i++) {
    result *= num;
  }

  return result;
};

console.log(powerOfNumber(2, 5));
