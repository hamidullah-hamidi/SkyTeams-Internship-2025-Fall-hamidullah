// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Write a function to check if an array contains a specific element

// Description: Determine if a given element exists in the array.
// Example:
// Input:
// Array = [3, 6, 9, 12], Element = 6
// Output:
// Found

// shortest way
export const findElement = (arr, el) => (arr.includes(el) ? 'Found' : 'Not found');

/*
export const findElement = (arr, el) => {
  // way -1
  return arr.includes(el);

  // way -2
  // return arr.includes(el) ? true : false;

  // way -3
  // for (let e of arr) {
  //   if (e === el) return 'Found';
  // }
  // return 'Not found';
};
*/
console.log(findElement([3, 6, 9, 12], 6));
