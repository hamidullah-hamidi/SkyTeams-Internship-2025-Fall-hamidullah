// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  Top K Frequent Elements

// Input: [1,1,1,2,2,3], k=2 → [1,2]

export const topKFrequentElements = (arr, k) => {
  const obj = {};
  const array = [];
  const result = [];

  for (let el of arr) {
    if (obj[el]) obj[el] = obj[el] + 1;
    else obj[el] = 1;
  }

  for (let key in obj) {
    array.push([+key, obj[key]]);
  }

  array.sort((a, b) => b[1] - a[1]);

  array.slice(0, k).map((el) => result.push(el[0]));

  return result;
};

console.log(topKFrequentElements([1, 1, 1, 2, 2, 5, 5, 5, 5, 5, 3], 2)); // [1,5]
