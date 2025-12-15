// Author: hamidullah hamidi
// Date: 2025/18/11

// Question: Collatz Sequence (Hailstone Numbers)

// Description:
// Take a number n.
// • If n is even, divide it by 2.
// • If n is odd, multiply it by 3 and add 1.
// • Repeat until n = 1.
// • Count the number of steps to reach 1.
// Example:
// Input:
// 6
// Output:
// 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)

export const collatzSequence = (n) => {
  if (n <= 0) return null;

  let steps = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    steps = [...steps, n];
  }

  return `${steps.join(' -> ')} (Steps: ${steps.length - 1})`;
};

console.log(collatzSequence(6));
