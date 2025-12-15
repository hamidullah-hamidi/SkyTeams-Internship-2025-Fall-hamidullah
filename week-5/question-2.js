// Author: hamidullah hamidi
// Date: 2025/15/11

// Question:  Min Stack
// Problem: Design a stack that supports:
// • push(x)
// • pop()
// • top()
// • getMin() → returns the minimum element in O(1)

import { LinkedList } from './LinkedList/LinkedList.js';

export class MinStack {
  constructor() {
    this.values = new LinkedList();
    this.min = null;
  }

  push(value) {
    if (!this.head) this.min = value;
    else if (value < this.min.value) this.min.value = value;
    console.log(this.min);

    return this.values.insertLast(value);
  }

  pop() {
    return this.values.deleteLast();
  }

  top() {
    return this.values.tail ? this.values.tail.value : null;
  }

  getMin() {
    return this.min;
  }

  getAll() {
    return this.values.getAll();
  }
}

const stack = new MinStack();

stack.push(10);
stack.push(20);

console.log(stack.getAll());
console.log(stack.getMin());
