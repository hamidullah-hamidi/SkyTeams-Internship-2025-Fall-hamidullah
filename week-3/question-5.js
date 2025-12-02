// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Write a function to find the largest element in an array

// Description: Given an array of numbers, return the largest value.
// Example:
// Input:
// [2, 8, 5, 3, 9]
// Output:
// 9

export const largestNumber = (arr) => {
  // way -1 (reduce)
  return arr.length === 0 ? undefined : arr.reduce((max, n) => (n > max ? n : max));

  // way -2

  // if (arr.length === 0) return undefined;

  // let largest = arr[0];

  // for (let e of arr) {
  //   if (e > largest) largest = e;
  // }

  // return largest;
};

console.log(largestNumber([2, 8, 5, 3, 9]));
