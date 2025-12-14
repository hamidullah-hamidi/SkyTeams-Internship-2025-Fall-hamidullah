class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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

const linkedList = new SinglyLinkedList();

linkedList.insertLast(10);
linkedList.insertLast(20);
linkedList.insertLast(30);
linkedList.print();
linkedList.insertLast(40);
linkedList.print();
linkedList.insertFirst(5);
linkedList.print();
linkedList.deleteFirst();
linkedList.print();
console.log(linkedList.searchValue(20));
