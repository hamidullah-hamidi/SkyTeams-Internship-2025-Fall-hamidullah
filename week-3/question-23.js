// Author: hamidullah hamidi
// Date: 2025/18/11

// Question:  Calculate Factorial Using Recursion

// Description: Implement factorial(n), which calculates the factorial of n using recursion.
// Example:
// Input:
// 5
// Output:
// 120

export const factorial = (n) => {
  if (n < 0) throw new Error('number should not be negative');
  if (n < 2) return 1;
  else return n * factorial(n - 1);
};

console.log(factorial(5));
