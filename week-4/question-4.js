// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Intersection of Two Arrays

// Description: Return elements present in both arrays.
// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

import { myIncludes } from '../helpers/arrays/myIncludes.js';

export const intersectionOfArrays = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !myIncludes(result, arr1[i])) {
        result.push(arr1[i]);
        break;
      }
    }
  }

  return result;
};
console.log(intersectionOfArrays([1, 2, 2, 3], [2, 2, 4]));

//* with obj
/*

  let obj = {};

  for (let el of arr2) {
    obj[el] = true;
  }

  for (let el of arr1) {
    if (obj[el] && !myIncludes(result, el)) result.push(el);
  }
  
*/
