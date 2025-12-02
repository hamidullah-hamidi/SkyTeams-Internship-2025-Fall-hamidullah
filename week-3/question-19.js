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

// export const pyramid = (row) => {
//   let result = [];

//   for (let i = 1; i <= row; i++) {
//     let spaces = ' '.repeat(row - i);
//     let stars = '*'.repeat(2 * i - 1);
//     result.push(spaces + stars);
//   }

//   return result;
// };

export const pyramid = (row) => {
  let result = '';

  for (let i = 1; i <= row; i++) {
    let space = '';
    let star = '';

    for (let j = row - i; j > 0; j--) {
      space += ' ';
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      star += '*';
    }

    result += space + star + '\n';
  }

  return result;
};

console.log(pyramid(4));
// .forEach((el) => console.log(el)));
