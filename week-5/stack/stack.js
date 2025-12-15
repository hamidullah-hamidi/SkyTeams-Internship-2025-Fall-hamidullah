import { LinkedList } from '../LinkedList/LinkedList.js';

export class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.insertLast(value);
  }

  pop() {
    return this.list.deleteLast();
  }

  top() {
    return this.list.tail.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
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
