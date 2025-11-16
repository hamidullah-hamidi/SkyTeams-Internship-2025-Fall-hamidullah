// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Sum of digits of a number

// Description: Calculate the sum of all digits in a given number.
// Example:
// Input:
// 12345
// Output:
// 15

export function sumDigits(num) {
  num = Math.abs(num);

  // way -1
  let sum = 0;
  for (let e of num.toString()) {
    sum += Number(e);
  }

  // way -2
  // const numArray = [];
  // for (let e of num.toString()) {
  //   numArray.push(Number(e));
  // }
  // const sum = numArray.reduce((acc, cur) => acc + cur);

  return sum;
}

console.log(sumDigits(-12345));
