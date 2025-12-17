// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  Set Matrix Zeroes

// If an element is zero, set its entire row and column to zero.
// Follow-up: solve in constant extra space using the matrix itself as markers.

export const setMatrixZeros = (matrix) => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return matrix;

  const rowsLength = matrix.length;
  const colsLength = matrix[0].length;
  const rows = new Array(rowsLength).fill(false);
  const cols = new Array(colsLength).fill(false);

  for (let i = 0; i < rowsLength; i++) {
    for (let j = 0; j < colsLength; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < rowsLength; i++) {
    for (let j = 0; j < colsLength; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.table(
  setMatrixZeros([
    [1, 2, 3],
    [2, 0, 5],
    [4, 3, 2],
  ])
);
