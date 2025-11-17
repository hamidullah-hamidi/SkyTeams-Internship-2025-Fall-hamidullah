// Author: hamidullah hamidi
// Date: 2025/17/11

// Question: Find factorial of a number

// Description: Compute N! using iterative approach.
// Example:
// Input:
// 5
// Output:
// 120

export const findFactorial = (num) => {
  if (num < 0) return undefined;
  if (num === 0) return 1;

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};
console.log(findFactorial(5));
