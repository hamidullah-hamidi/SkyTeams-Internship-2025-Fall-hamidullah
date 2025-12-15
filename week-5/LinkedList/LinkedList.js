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

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;
    let next = this.head.next;

    while (next.next !== null) {
      current = current.next;
      next = next.next;
    }

    current.next = null;
    this.tail = current;
  }
  // 1, 2, 3

  isEmpty() {
    return this.head === null;
  }

  getAll() {
    const list = [];
    let current = this.head;

    while (current) {
      list.push(current.value);
      current = current.next;
    }

    return list;
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

// const list = new LinkedList();

// list.insertFirst(10);
// list.insertLast(30);

// console.log(list.getAll());
// console.log(list.size());

// console.log(list.isEmpty());

// list.deleteFirst();
// console.log(list.getAll());

// console.log(list.deleteLast());
// console.log(list.getAll());
