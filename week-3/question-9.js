// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Write a function to count occurrences of an element in an array

// Description: Count how many times a given number appears in the array.
// Example:
// Input:
// Array = [2, 3, 2, 5, 2], Element = 2
// Output:
// 3

export const countElement = (arr, el) => {
  if (arr.length === 0) return undefined;

  // way -1
  return arr.reduce((acc, cur) => (cur === el ? acc + 1 : acc), 0);

  // way -2
  // let count = 0;

  // for (let e of arr) {
  //   if (e === el) count++;
  // }

  // return count;
};

console.log(countElement([2, 3, 2, 5, 2], 2));
