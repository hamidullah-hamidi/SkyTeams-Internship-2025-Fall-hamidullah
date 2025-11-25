// Author: hamidullah hamidi
// Date: 2025/17/11

// Question: Pattern Printing – Right-angled Triangle

// Example:
// Input:
// 4
// Output:
// *
// **
// ***
// ****

export const rightAngledTriangle = (row) => {
  // way -1 (without return)

  // let star = '';

  // for (let i = 0; i < row; i++) {
  //   console.log((star += '*'));
  // }

  // way -2

  let star = '';
  let result = '';

  for (let i = 0; i < row; i++) {
    star += '*';
    result += star + '\n';
  }

  return result.trim();
};

console.log(rightAngledTriangle(4));
