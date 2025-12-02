// Author: hamidullah hamidi
// Date: 2025/19/11

// Question: Find Unique Elements in an Array

// Description: Return an array with only unique elements from the input array.
// Example:
// Input:
//
// Output:
// [1, 3, 5]

//* way 1

export const findUniqueElements = (arr) => {
  const obj = {};
  const uniqueElements = [];

  for (let num of arr) {
    if (obj[num]) obj[num] = obj[num] + 1;
    else obj[num] = 1;
  }

  for (let [key, _] in obj) {
    if (obj[key] === 1) uniqueElements.push(key);
  }

  return uniqueElements;
};

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]));

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

//* way -3
// export const findUniqueElements = (arr) => [...new Set(arr)];
