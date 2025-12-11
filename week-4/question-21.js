// Author: hamidullah hamidi
// Date: 2025/12/10

// Question: Longest Palindromic Substring

// Description: Find the longest palindromic substring in the given string.

// Example: Input: "babab" → "bab" or "aba"

export function longestPalindrome(str) {
  findSubStrings(str);
}

console.log(longestPalindrome('babad'));

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

console.table(findSubStrings('babad'));
