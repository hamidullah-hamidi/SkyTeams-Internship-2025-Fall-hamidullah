// Author: hamidullah hamidi
// Date: 2025/16/12

// Question: Backspace String Compare
// Problem:
// Given two strings s and t, return true if they are equal after interpreting # as a backspace.
// Example:
// Input: "ab#c", "ad#c"
// Output: true
// Both become "ac".

import { Stack } from './stack/stack.js';

export const backspaceCompare = (s, t) => {
  const stack1 = new Stack();
  const stack2 = new Stack();
  let stack1El = '';
  let stack2El = '';

  for (let el of s) {
    if (el === '#') {
      if (!stack1.isEmpty()) stack1.pop();
    } else stack1.push(el);
  }

  for (let el of t) {
    if (el === '#') {
      if (!stack2.isEmpty()) stack2.pop();
    } else stack2.push(el);
  }

  while (!stack1.isEmpty()) {
    stack1El = stack1.pop() + stack1El;
  }
  while (!stack2.isEmpty()) {
    stack2El = stack2.pop() + stack2El;
  }

  return stack1El === stack2El;
};

// console.log(backspaceCompare('ab#c', 'ad#c'));
// console.log(backspaceCompare('a#c', 'b#d'));
