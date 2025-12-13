// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  Top K Frequent Elements

// Input: [1,1,1,2,2,3], k=2 → [1,2]

export const topKFrequentElements = (arr, k) => {
  const obj = {};
  const result = [];

  for (let el of arr) {
    if (obj[el]) obj[el] = obj[el] + 1;
    else obj[el] = 1;
  }

  let i = 0;
  for (let key in obj) {
    let longest = obj[key];
    if (obj[key] > longest && i < k) {
      0;
      longest = +key;
      result.push(key);
      i++;
    }
  }

  return result.map(Number);
};

console.log(topKFrequentElements([1, 1, 1, 2, 2, 5, 5, 5, 5, 5, 3], 2)); // [1,5]
