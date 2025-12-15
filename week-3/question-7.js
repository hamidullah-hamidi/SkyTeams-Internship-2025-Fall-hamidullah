// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Write a function to find the sum of all elements in an array

// Description: Calculate the total sum of all array elements.
// Example:
// Input:
// [1, 2, 3, 4, 5]
// Output:
// 15

export const sumOfArrayElements = (arr) => {
  // way -1
  return arr.length === 0 ? undefined : arr.reduce((acc, cur) => acc + cur);

  // way -2
  // let sum = 0;
  // for (let e of arr) {
  //   sum += e;
  // }

  // return sum;
};

console.log(sumOfArrayElements([1, 2, 3, 4, 5]));
