class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAt(data, pos) {
    const newNode = new Node(data);

    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;

      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (current && currentIndex < pos) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex === pos) {
      prev.next = newNode;
      newNode.next = current;

      if (!current) {
        this.tail = newNode;
      }
    } else {
      console.log("Invalid index");
    }
  }

  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  display() {
    let temp = this.head;
    let res = [];
    while (temp) {
      res.push(temp.data);
      temp = temp.next;
    }
    const ll = res.join(" -> ");
    console.log(ll);
  }

  deleteFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return;
  }

  deleteLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log("Middle element is: => ", slow.data);
  }

  reversedLinkedList() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    console.log(prev);
  }
}

const ll = new LinkedList();

ll.append(4);
ll.append(10);
ll.append(5);
ll.insertAt(9, 2);
ll.append(8);
// ll.deleteFirst();
// ll.deleteLast();
ll.display();
ll.findMiddle();
ll.reversedLinkedList();
