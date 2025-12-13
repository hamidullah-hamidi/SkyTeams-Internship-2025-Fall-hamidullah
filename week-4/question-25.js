// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  Set Matrix Zeroes

// If an element is zero, set its entire row and column to zero.
// Follow-up: solve in constant extra space using the matrix itself as markers.

export const setMatrixZeros = (matrix) => {};

console.table(
  setMatrixZeros([
    [1, 2, 3],
    [2, 0, 5],
    [4, 3, 2],
  ])
);

// 1 2 3      1 0 3
// 2 0 5  =>  0 0 0
// 4 3 2      4 0 2
