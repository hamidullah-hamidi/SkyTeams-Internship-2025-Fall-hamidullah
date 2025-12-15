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
  let originalNum = num;
  let reversed = 0;

  while (num !== 0) {
    const digit = num % 10;

    reversed = reversed * 10 + digit;

    num = Math.floor(num / 10);
  }

  return originalNum === reversed;

  // way -2
  // const reverse = num.toString().split('').reverse().join('');

  // way -3
  // let reverse = '';

  // for (let i = num.toString().length - 1; i >= 0; i--) {
  //   reverse += num.toString()[i];
  // }

  // return +reverse === num ? true : false;
};

console.log(isPalindrome(121));
