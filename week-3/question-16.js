// Author: hamidullah hamidi
// Date: 2025/17/11

// Question:  Fibonacci sequence

// Description: Print the Fibonacci sequence up to N terms.
// Example:
// Input:
// 7
// Output:
// 0, 1, 1, 2, 3, 5, 8;

export const fibonacciSequence = (num) => {
  if (num === 0) return [];
  if (num === 1) return [0];

  let result = [0, 1];

  for (let i = 2; i < num; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result;
};

console.log(fibonacciSequence(7));
