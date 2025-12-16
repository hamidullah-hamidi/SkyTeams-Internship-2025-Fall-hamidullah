// Author: hamidullah hamidi
// Date: 2025/16/12

// Question: Evaluate Reverse Polish Notation (RPN)
// Problem:
// Evaluate an expression in Reverse Polish Notation.
// Valid operators: + - * /.
// Example:
// Input: ["2","1","+","3","*"]
// Output: 9
// Explanation: (2 + 1) * 3

import { Stack } from './stack/stack.js';

export const evalRPN = (tokens) => {
  const stack = new Stack();

  for (let el of tokens) {
    if (el === '+') stack.push(stack.pop() + stack.pop());
    else if (el === '-') {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
    } else if (el === '*') stack.push(stack.pop() * stack.pop());
    else if (el === '/') {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else stack.push(+el);
  }

  return stack.pop();
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
