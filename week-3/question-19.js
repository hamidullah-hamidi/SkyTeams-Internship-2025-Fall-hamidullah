// Author: hamidullah hamidi
// Date: 2025/18/11

// Question:  Pattern Printing – Pyramid

// Example:
// Input:
// 5
// Output:
//     *
//    ***
//   *****
//  *******
// *********

export const pyramid = (row) => {
  let output = [];

  for (let i = 1; i <= row; i++) {
    let spaces = ' '.repeat(row - i);
    let stars = '*'.repeat(2 * i - 1);
    output.push(spaces + stars);
  }

  return output;
};
