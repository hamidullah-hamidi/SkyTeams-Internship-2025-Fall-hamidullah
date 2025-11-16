// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Reverse a number

// Description: Reverse the digits of a number.
// Example:
// Input:
// 1234
// Output:
// 4321

export function reverseNumber(num) {
  // way -1
  const reversed = Math.abs(num).toString().split('').reverse().join('');

  // way -2
  // let reversed = '';
  // let numString = Math.abs(num).toString();

  // for (let i = numString.length - 1; i >= 0; i--) {
  //   reversed += numString[i];
  // }

  return num < 0 ? -+reversed : +reversed;
}

console.log(reverseNumber(-1234));
