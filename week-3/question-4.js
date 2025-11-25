// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Display all factors of a number

// Description: Print all numbers that divide the given number exactly.
// Example:
// Input:
// 12
// Output:
// 1, 2, 3, 4, 6, 12

export function factorsOfNumber(num) {
  if (num === 0) return [];

  let factors = [];

  for (let i = 1; i <= Math.abs(num); i++) {
    if (num % i === 0) factors.push(i);
  }

  return factors;
}

console.log(factorsOfNumber(0));
