// Author: hamidullah hamidi
// Date: 2025/18/11

// Question:  Generate Pascal’s Triangle

// Description: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows.
// Example:
// Input:
// 5
// Output:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

export const pascalTriangle = (rows) => {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      let value = 0;

      if (j === 0 || j === i) value = 1;
      else value = triangle[i - 1][j - 1] + triangle[i - 1][j];

      row.push(value);
    }
    triangle.push(row);
  }
  return triangle;
};

console.log(pascalTriangle(5).forEach((el) => console.log(el)));
