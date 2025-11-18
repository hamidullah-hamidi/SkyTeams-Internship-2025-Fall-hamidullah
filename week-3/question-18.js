// Author: hamidullah hamidi
// Date: 2025/18/11

// Question: Pattern Printing – Right-aligned Triangle
// Example:
// Input:
// 4
// Output:

//    *
//   **
//  ***
// ****

// export const rightAngledTriangle = (row) => {
//   for (let i = 1; i <= row; i++) {
//     let spaces = ' '.repeat(row - i);
//     let stars = '*'.repeat(i);
//     console.log(spaces + stars);
//   }
// };

export const rightAngledTriangle = (row) => {
  let output = [];

  for (let i = 1; i <= row; i++) {
    let spaces = ' '.repeat(row - i);
    let stars = '*'.repeat(i);
    output.push(spaces + stars);
  }

  return output;
};

rightAngledTriangle(4);
