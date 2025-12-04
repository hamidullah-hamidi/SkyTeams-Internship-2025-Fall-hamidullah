// Author: hamidullah hamidi
// Date: 2025/01/11

// Question:  Merge Two Sorted Arrays

// Description: Merge two sorted arrays into a single sorted array.
// Example:
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

export const mergeTwoSortedArrays = (arr1, arr2) => {
  let result = [...arr1, ...arr2];

  for (let i = 0; i < result.length - 1; i++) {
    let temp = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j] > result[j + 1]) {
        temp = result[j + 1];
        result[j + 1] = result[j];
        result[j] = temp;
      }
    }
  }

  return result;
};
console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6]));
