// Author: hamidullah hamidi
// Date: 2025/19/11

// Question:  Remove Duplicates from an Array

// Description: Remove duplicate elements efficiently from an array.
// Example:
// Input:
// [3, 1, 3, 5, 1]
// Output:
// [3, 1, 5]

//* way 1
export const removeDuplicatesFromArray = (arr) => {
  let obj = {};
  let result = [];

  for (let num of arr) {
    if (obj[num]) obj[num] = obj[num] + 1;
    else obj[num] = 1;
  }
  console.log(obj);

  for (let [key, _] in obj) {
    result.push(key);
  }

  return result;
};

console.log(removeDuplicatesFromArray([3, 1, 3, 5, 1]));

//* way 2
// export const removeDuplicatesFromArray = (arr) => [...new Set(arr)];
