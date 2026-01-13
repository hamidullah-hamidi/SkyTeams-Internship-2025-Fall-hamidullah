// Author: hamidullah hamidi
// Date: 2025/15/11

// Question:  Valid Parentheses
// Problem:
// Given a string containing only '(' , ')' , '{' , '}' , '[' , ']', determine if the string is valid.
// A valid string must have brackets closed in the correct order.
// Example:
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false

import { Stack } from './stack/stack.js';

export const validParentheses = (str) => {
  const stack = new Stack();

  let obj = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let el of str) {
    if (el === '}' || el === ']' || el === ')') {
      if (stack.isEmpty() || stack.pop() !== obj[el]) return false;
    } else stack.push(el);
  }

  return stack.isEmpty();
};

console.log(validParentheses('[{()}]'));
