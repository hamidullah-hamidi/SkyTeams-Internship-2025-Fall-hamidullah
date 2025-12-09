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

const a = new StackArray();

a.push(10);
a.push(20);
a.push(30);

console.log(a.peek());
console.log(a.isEmpty());
console.log(a.pop());
console.log(a.size());
