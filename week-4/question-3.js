// Author: hamidullah hamidi
// Date: 2025/01/11

// Question:  Rotate Array K Times to the Right

// Description: Rotate elements of an array K times to the right.
// Example:
// Input: [1, 2, 3, 4, 5], K = 2
// Output: [4, 5, 1, 2, 3]

export const rotateArrayToRight = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let last = arr[arr.length - 1];

    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[0] = last;
  }

  return arr;
};

console.log(rotateArrayToRight([1, 2, 3, 4, 5], 10));

//* short way
// last = arr.pop()
// arr.unshift(last)
