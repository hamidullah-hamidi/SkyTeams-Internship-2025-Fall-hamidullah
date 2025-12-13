// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Intersection of Two Arrays

// Description: Return elements present in both arrays.
// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

export const intersectionOfArrays = (arr1, arr2) => {
  const map = new Map();
  let result = [];

  for (let el of arr1) {
    if (!map.has(el)) map.set(el, true);
  }

  for (let el of arr2) {
    if (map.has(el)) {
      result.push(el);
      map.delete(el);
    }
  }

  return result;
};
console.log(intersectionOfArrays([1, 2, 3, 4], [3, 4, 5, 6]));

//* with obj
// let obj = {};
// let result = {};

// for (let el of arr1) {
//   obj[el] = true;
// }

// for (let el of arr2) {
//   if (obj[el]) result[el] = true;
// }

// return Object.keys(result).map(Number);
