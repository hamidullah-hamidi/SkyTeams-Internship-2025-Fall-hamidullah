class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    let newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertLast(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  deleteFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  searchValue(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  print() {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result);
  }
}

const list = new SinglyLinkedList();

list.insertLast(10);
list.insertLast(20);
list.insertLast(30);
list.print();
list.insertLast(40);
list.print();
list.insertFirst(5);
list.print();
list.deleteFirst();
list.print();
console.log(list.searchValue(20));
