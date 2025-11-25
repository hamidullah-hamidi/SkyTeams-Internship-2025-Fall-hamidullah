// Author: hamidullah hamidi
// Date: 2025/19/11

// Question: Find Unique Elements in an Array

// Description: Return an array with only unique elements from the input array.
// Example:
// Input:
//
// Output:
// [1, 2, 3, 4, 5]

//* way -1
export const findUniqueElements = (arr) => [...new Set(arr)];

//* way -2
/*
export const findUniqueElements = (arr) => {
  let uniqueArray = new Set();
  let uniqueArray1 = [];

  for (let el of arr) {
    uniqueArray.add(el);
  }

  for (let el of uniqueArray.values()) {
    uniqueArray1.push(el);
  }

  return uniqueArray1;
};
*/

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]));
