// Author: hamidullah hamidi
// Date: 2025/01/11

// Question:  Merge Two Sorted Arrays

// Description: Merge two sorted arrays into a single sorted array.
// Example:
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

export const mergeTwoSortedArrays = (arr1, arr2) => {
  let result = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
console.log(mergeTwoSortedArrays([1, 3], [2, 4, 6]));
