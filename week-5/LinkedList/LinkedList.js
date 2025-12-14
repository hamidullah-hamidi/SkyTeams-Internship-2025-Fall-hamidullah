class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  insertLast(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  deleteFirst() {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) this.tail = null;

    return value;
  }

  deleteLast() {
    if (!this.head) return null;

    const value = this.tail.value;

    let current = this.head;
    let next = this.head.next;

    if (!next) {
      this.head = null;
      this.tail = null;
      return value;
    }

    while (next.next !== null) {
      current = current.next;
      next = next.next;
    }

    current.next = null;
    this.tail = current;

    return value;
  }

  isEmpty() {
    return this.head === null;
  }

  getAll() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

const list = new LinkedList();

// list.insertLast(10);
// list.insertLast(20);
// list.insertLast(30);
// console.log(list.getAll());
// list.insertLast(40);
// list.getAll();
// list.insertFirst(5);
// list.getAll();
// list.deleteFirst();
// list.deleteLast();
// list.getAll();
// console.log(list.searchValue(20));
// console.log(list.size());
