// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  K-th Largest Element

// Given an array of numbers and a value k, find the number that would appear in the k-th
// position if the array were sorted in descending order.

export const KLargestElement = (arr, k) => {
  arr.sort((a, b) => b - a);

  return Number(arr.slice(k - 1, k));
};

console.log(KLargestElement([5, 4, 3, 2, 1], 4));
