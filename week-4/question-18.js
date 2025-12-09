// Author: hamidullah hamidi
// Date: 2025/09/12

// Question:  Implement a Stack (Array-Based)

// Description: Operations: push, pop, peek, isEmpty.

// Example: push(item), pop(), peek(), isEmpty()

export class StackArray {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new StackArray();

stack.push(10);
stack.push(20);
stack.push(30);

// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.size());
