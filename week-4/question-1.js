// Author: hamidullah hamidi
// Date: 2025/01/11

// Question: Find Second Largest Number in an Array

// Description: Find the second largest number without sorting the array.
// Example:
// Input: [10, 20, 4, 45, 99]
// Output: 45

export const secondLargestNumber = (arr) => {
  if (arr.length < 2) return null;

  let max = -Infinity;
  let secMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secMax = max;
      max = num;
    } else if (num > secMax && num < max) secMax = num;
  }

  return secMax === -Infinity ? null : secMax;
};

console.log(secondLargestNumber([10, 20, 4, 45, 99]));
