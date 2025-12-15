// Author: hamidullah hamidi
// Date: 2025/19/11

// Question:  Find Missing Number in Array (1 to N)

// Description: Given numbers from 1 to N with one missing, find the missing number.
// Example:
// Input:
// [1, 2, 4, 5]
// Output:
// 3

export const findMissingNumber = (arr) => {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
};

console.log(findMissingNumber([1, 2, 4, 5]));
