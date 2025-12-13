// Author: hamidullah hamidi
// Date: 2025/9/12

// Question: Implement a Queue Using Two Stacks

// Description: Implement a queue data structure using two stacks. Provide enqueue (add to end) and dequeue (remove from front) operations.

// Example: enqueue(1), enqueue(2), dequeue() -> 1

import { StackArray } from './question-18.js';

export class QueueWithStacks {
  constructor() {
    this.stack1 = new StackArray();
    this.stack2 = new StackArray();
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else return this.stack2.pop();
  }

  isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
}

const queue = new QueueWithStacks();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
