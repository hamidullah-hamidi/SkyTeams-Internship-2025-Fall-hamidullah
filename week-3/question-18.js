// Author: hamidullah hamidi
// Date: 2025/18/11

// Question: Pattern Printing – Left-aligned Triangle
// Example:
// Input:
// 4
// Output:

//    *
//   **
//  ***
// ****

export const leftAngledTriangle = (row) => {
  let result = '';

  for (let i = 0; i < row; i++) {
    let star = '';
    let space = '';

    for (let j = row - i; j > 0; j--) {
      space += ' ';
    }

    for (let k = 0; k <= i; k++) {
      star += '*';
    }

    result += space + star + '\n';
  }

  return result;
};

console.log(leftAngledTriangle(4));
