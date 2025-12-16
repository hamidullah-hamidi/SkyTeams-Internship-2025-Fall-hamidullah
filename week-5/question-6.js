// Author: hamidullah hamidi
// Date: 2025/16/12

// Question: Remove Adjacent Duplicates
// Problem:
// Given a string s, repeatedly remove adjacent pairs of equal characters.
// Example:
// Input: "abbaca"
// Output: "ca"

import { Stack } from './stack/stack.js';

export const removeDuplicates = (str) => {
  const stack = new Stack();
  let result = '';

  for (let el of str) {
    if (el === stack.top()) stack.pop();
    else stack.push(el);
  }

  while (!stack.isEmpty()) {
    result = stack.pop() + result;
  }

  return result;
};

console.log(removeDuplicates('abbaca'));
