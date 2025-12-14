import { LinkedList } from '../LinkedList/LinkedList.js';

export class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.insertLast(value);
  }

  pop() {
    return this.items.deleteLast();
  }

  top() {
    return this.items.tail.value;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size());

// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.top());

// stack.size();
