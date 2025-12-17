// Author: hamidullah hamidi
// Date: 2025/09/12

// Question: Check Balanced Parentheses

// Description: Check if a string of parentheses, brackets, and braces is balanced.

// Example: Input: "{[()]}" → Output: Balanced

import { StackArray } from './question-18.js';

export function checkBalanced(str) {
  const stack = new StackArray();

  const obj = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let el of str) {
    if (el === ')' || el === '}' || el === ']') {
      if (stack.isEmpty() || stack.pop() !== obj[el]) return false;
    } else stack.push(el);
  }

  return stack.isEmpty();
}

console.log(checkBalanced('{([])}'));
