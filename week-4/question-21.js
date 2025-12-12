// Author: hamidullah hamidi
// Date: 2025/11/12

// Question: Longest Palindromic Substring

// Description: Find the longest palindromic substring in the given string.
// Example: Input: "babab" → "bab" or "aba"

function longestPalindrome(str) {
  let subPalindrome = '';

  const subStrings = findSubStrings(str);

  for (let e of subStrings) {
    const reverse = e.toString().split('').reverse().join('');

    if (reverse === e) {
      if (e.length > subPalindrome.length) subPalindrome = e;
    }
  }

  return subPalindrome;
}

function findSubStrings(str) {
  let subStrings = [];

  for (let i = 0; i < str.length; i++) {
    let current = '';
    for (let j = i; j < str.length; j++) {
      current += str[j];
      if (!subStrings.includes(current)) subStrings.push(current);
    }
  }

  return subStrings;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('baab'));
console.log(longestPalindrome('babab'));
