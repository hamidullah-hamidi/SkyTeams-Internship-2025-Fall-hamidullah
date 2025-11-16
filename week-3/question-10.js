// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Check whether a number is prime

// Description: Determine if a number is divisible only by 1 and itself.
// Example:
// Input:
// 17
// Output:
// Prime
// Input:
// 20
// Output:
// Not Prime

export const isPrimeNumber = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// console.log(isPrimeNumber(17));
console.log(isPrimeNumber(20));
