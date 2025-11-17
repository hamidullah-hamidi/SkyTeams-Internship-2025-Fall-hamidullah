// Author: hamidullah hamidi
// Date: 2025/17/11

// Question: Check for palindrome number

// Description: Check if a number reads the same backward and forward.
// Example:
// Input:
// 121
// Output:
// Palindrome
// Input:
// 123
// Output:
// Not Palindrome

export const isPalindrome = (num) => {
  if (num < 0) return false;

  // way -1
  const reverse = num.toString().split('').reverse().join('');

  // way -2
  // let reverse = '';

  // for (let i = num.toString().length - 1; i >= 0; i--) {
  //   reverse += num.toString()[i];
  // }

  return +reverse === num ? true : false;
};

console.log(isPalindrome(121));
