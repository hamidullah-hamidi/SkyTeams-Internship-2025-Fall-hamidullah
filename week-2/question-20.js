// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Count digits in a number

// Description: Find how many digits are in a number.
// Example:
// Input:
// 786
// Output:
// 3

function countDigits(num) {
  let count = 0;

  // use divide by 10 better and right way than changing to string
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigits(786));

module.exports = countDigits;
