// Author: hamidullah hamidi
// Date: 2025/17/11

// Question:  Generate all prime numbers up to N

// Description: List all prime numbers up to a given limit using a loop.
// Example:
// Input:
// 10
// Output:
// 2, 3, 5, 7

import { isPrimeNumber } from './question-10.js';

export const allPrimeNumbers = (num) => {
  let primes = [];

  if (num < 2) return [];

  // way -1
  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) primes.push(i);
  }

  // way -2
  // for (let i = 2; i <= num; i++) {
  //   let isPrime = true;
  //   for (let j = 2; j <= Math.sqrt(i); j++) {
  //     if (i % j === 0) {
  //       isPrime = false;
  //       break;
  //     }
  //   }
  //   if (isPrime) primes.push(i);
  // }

  return primes;
};

console.log(allPrimeNumbers(10));
