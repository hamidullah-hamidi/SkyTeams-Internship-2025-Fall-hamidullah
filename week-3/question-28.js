// Author: hamidullah hamidi
// Date: 2025/19/11

// Question:  Remove Duplicates from an Array

// Description: Remove duplicate elements efficiently from an array.
// Example:
// Input:
// [3, 1, 3, 5, 1]
// Output:
// [3, 1, 5]

export const removeDuplicatesFromArray = (arr) => [...new Set(arr)];

console.log(removeDuplicatesFromArray([3, 1, 3, 5, 1]));
