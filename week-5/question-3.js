// Author: hamidullah hamidi
// Date: 2025/15/11

// Question:  Implement Queue Using Stacks
// Problem:
// Implement a queue using two stacks.
// Operations:
// • push(x)
// • pop() → removes front
// • peek() → returns front
// • empty()

import { Stack } from './stack/stack.js';

export class QueueUsingStacks {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  push(value) {
    this.stack1.push(value);
  }

  pop() {
    if (!this.stack2.isEmpty()) return this.stack2.pop();

    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    return this.stack2.pop();
  }

  peek() {
    if (!this.stack2.isEmpty()) return this.stack2.top;

    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    return this.stack2.top();
  }

  empty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
}

// const queue = new QueueUsingStacks();

// queue.push(1);
// queue.push(2);
// console.log(queue.peek()); // 1
// console.log(queue.pop()); // 1
// console.log(queue.empty()); // false
