// Author: hamidullah hamidi
// Date: 2025/15/11

// Question: Min Stack
// Problem: Design a stack that supports:
// • push(x)
// • pop()
// • top()
// • getMin() → returns the minimum element in O(1)

import { LinkedList } from './LinkedList/LinkedList.js';

export class MinStack {
  constructor() {
    this.values = new LinkedList();
    this.minStack = new LinkedList();
  }

  push(value) {
    this.values.insertLast(value);

    if (!this.minStack.head || value <= this.minStack.tail.value) {
      this.minStack.insertLast(value);
    }
  }

  pop() {
    const popped = this.values.deleteLast();

    if (this.minStack.tail && popped === this.minStack.tail.value) {
      this.minStack.deleteLast();
    }

    return popped;
  }

  top() {
    return this.values.tail ? this.values.tail.value : null;
  }

  getMin() {
    return this.minStack.tail ? this.minStack.tail.value : null;
  }

  getAll() {
    console.log('Stack values:', this.values.getAll());
    console.log('MinStack values:', this.minStack.getAll());
  }
}

// const stack = new MinStack();

// stack.push(10);
// stack.push(20);
// stack.push(5);
// stack.push(13);
// stack.push(2);

// stack.getAll();
// console.log(stack.getMin());

// stack.pop();
// stack.getAll();
// console.log(stack.getMin());

// stack.pop();
// stack.getAll();
// console.log(stack.getMin());
