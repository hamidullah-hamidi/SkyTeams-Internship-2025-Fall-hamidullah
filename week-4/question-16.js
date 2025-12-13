// Author: hamidullah hamidi
// Date: 2025/07/11

// Question:  Matrix Multiplication

// Description: Multiply matrix A × B manually.
// Example:
// [[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]]

export const matrixMultiplication = (A, B) => {
  if (A.length === 0 || B.length === 0 || A[0].length !== B.length) return false;

  const result = [];
  for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < A[0].length; k++) {
        sum += A[i][k] * B[k][j]; // (1 * 5) + (2 * 7)
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
};

console.log(
  matrixMultiplication(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);
