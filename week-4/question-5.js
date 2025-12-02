// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Rearrange Array (Even Before Odd)

// Description: Move even numbers before odd numbers while maintaining order.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6, 1, 3, 5]

export const rearrangeArray = (arr) => {
  let odd = [];
  let even = [];

  for (let el of arr) {
    if (el % 2 === 0) even.push(el);
    else odd.push(el);
  }

  return [...even, ...odd];
};

console.log(rearrangeArray([1, 2, 3, 4, 5, 6]));
