// Author: hamidullah hamidi
// Date: 2025/03/11

// Question:  Check Unique Characters

// Description: Return whether a string contains only unique chars.
// Example:
// "hello" → Not Unique

// import { myIncludes } from '../helpers/arrays/myIncludes.js';

// with obj -> O(n)
export const isUniqueChar = (str) => {
  let obj = {};

  for (let el of str) {
    if (obj[el]) return false;
    else obj[el] = true;
  }

  return true;
};

console.log(isUniqueChar('hello'));

//* another way
/*  O(n)2
  let result = '';

  for (let el of str) {
    if (myIncludes(result, el)) return false;
    else result += el;
  }
*/
