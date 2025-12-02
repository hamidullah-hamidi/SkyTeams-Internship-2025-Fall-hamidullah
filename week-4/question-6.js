// Author: hamidullah hamidi
// Date: 2025/02/11

// Question: Binary Search Algorithm

// Description: Implement binary search in a sorted array.
// Example:
// Input: [1, 3, 5, 7, 9], Target = 7
// Output: Found at index 3

export const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] > target) end = mid - 1;
  }
  return -1;
};

console.log(binarySearch([1, 3, 5, 7, 9], 7));
