import { LinkedList } from '../LinkedList/LinkedList.js';
export class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    return this.list.insertLast(value);
  }

  dequeue() {
    return this.list.deleteFirst();
  }

  front() {
    return this.list.head ? this.list.head.value : null;
  }

  rear() {
    return this.list.tail ? this.list.tail.value : null;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  reverseQueue() {
    const stack = [];

    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    } // stack: [10, 20, 30]

    while (stack.length) {
      this.enqueue(stack.pop());
    }
  }

  getAll() {
    return this.list.getAll();
  }

  size() {
    return this.list.size();
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getAll());
queue.reverseQueue();
console.log(queue.getAll());

// console.log(queue.front());
// console.log(queue.rear());
