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

  isEmpty() {
    return this.head === null;
  }

  print() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result);
  }
}

const list = new LinkedList();

// list.insertLast(10);
// list.insertLast(20);
// list.insertLast(30);
// list.print();
// list.insertLast(40);
// list.print();
// list.insertFirst(5);
// list.print();
// list.deleteFirst();
// list.print();
// console.log(list.searchValue(20));
