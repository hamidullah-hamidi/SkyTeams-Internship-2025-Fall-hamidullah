import { LinkedList } from '../LinkedList/LinkedList.js';

export class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.insertLast(value);
  }

  dequeue() {
    return this.items.deleteFirst();
  }

  front() {
    return this.items.head ? this.items.head.value : null;
  }

  rear() {
    return this.items.tail ? this.items.tail.value : null;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  reverseQueue() {
    const stack = [];

    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }

    while (stack.length) {
      this.enqueue(stack.pop());
    }
  }

  print() {
    this.items.print();
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
queue.reverseQueue();
queue.print();

console.log(queue.front());
console.log(queue.rear());
