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

  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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
    let res = [];
    let current = this.head;

    while (current !== null) {
      res.push(current.data);
      current = current.next;
    }
    console.log(res.join(" => "));
  }
}

const ll = new LinkedList();
ll.append(3);
ll.prepend(5);
ll.append(6);

ll.display();
