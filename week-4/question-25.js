// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  Set Matrix Zeroes

// If an element is zero, set its entire row and column to zero.
// Follow-up: solve in constant extra space using the matrix itself as markers.

export const setMatrixZeros = (matrix) => {
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (j === 0) {
          matrix[i][j + 1] = 0;
          matrix[i][j + 2] = 0;
        }
        if (j === 1) {
          matrix[i][j - 1] = 0;
          matrix[i][j + 1] = 0;
        }
        if (j === 2) {
          matrix[i][j - 2] = 0;
          matrix[i][j - 1] = 0;
        }
      }
    }
  }

  return matrix;
};

console.log(
  setMatrixZeros([
    [1, 2, 3],
    [2, 0, 5],
    [4, 3, 2],
  ])
);

// 1 2 3      1 0 3
// 2 0 5  =>  0 0 0
// 4 3 2      4 0 2
