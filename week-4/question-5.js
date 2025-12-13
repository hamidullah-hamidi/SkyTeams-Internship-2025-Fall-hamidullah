// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Rearrange Array (Even Before Odd)

// Description: Move even numbers before odd numbers while maintaining order.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6, 1, 3, 5]

export const rearrangeArray = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }

  return arr;
};

console.log(rearrangeArray([10, 1, 8, 3, 6, 5]));
