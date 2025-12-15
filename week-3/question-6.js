// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Write a function to find the smallest element in an array

// Description: Find and return the smallest number in an array.
// Example:
// Input:
// [4, 7, 1, 9, 2]
// Output:
// 1

export const smallestNumber = (arr) => {
  // way -1
  return arr.length === 0 ? undefined : arr.reduce((min, n) => (n < min ? n : min));

  // way -2
  // if (arr.length === 0) return undefined;

  // let smallest = arr[0];

  // for (let e of arr) {
  //   if (e < smallest) smallest = e;
  // }

  // return smallest;
};

console.log(smallestNumber([4, 7, 1, 9, 2]));
