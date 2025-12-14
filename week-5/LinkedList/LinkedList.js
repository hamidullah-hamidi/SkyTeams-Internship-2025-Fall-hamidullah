class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//  head
//   |
//   v
// +---+----+    +---+----+    +---+------+
// | 1 |  o----->| 2 |  o----->| 3 | null |
// +---+----+    +---+----+    +---+------+

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

    if (!this.head) this.head = newNode;

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;
    let result = '';

    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }

    console.log(result + 'null');
  }
}

const linkedList = new SinglyLinkedList();

linkedList.insertFirst(1);
linkedList.insertFirst(4);
linkedList.insertLast(10);
linkedList.print();
