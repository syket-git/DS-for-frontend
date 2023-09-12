//* In this file I will implement the linkedin with some common getter setter function.

class LinkedList {
  constructor() {
    this.nodes = [];
  }

  // get side function
  get size() {
    return this.nodes.length;
  }

  // get the head
  get head() {
    return this.size ? this.nodes[0] : null;
  }

  // get the last element
  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  insertAt(index, value) {
    let previousNode = this.nodes[index - 1] || null;
    let nextNode = this.nodes[index] || null;
    let node = { value, next: nextNode };

    if (previousNode) previousNode.next = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    return this.insertAt(0, value);
  }

  insertLast(value) {
    return this.insertAt(this.size, value);
  }

  getAt(index) {
    return this.nodes[index];
  }

  removeAt(index) {
    let previousNode = this.nodes[index - 1];
    let nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;
    return this.nodes.splice(index, 1);
  }

  reverse() {
    this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
      []
    );
  }

  clear() {
    this.nodes = [];
  }
}

const linkedList = new LinkedList();
linkedList.insertFirst(5);
linkedList.insertFirst(6);
linkedList.insertFirst(7);
// linkedList.removeAt(0);
linkedList.insertAt(1, 10);

// console.log(linkedList.reverse());
linkedList.reverse();

console.log(linkedList.head);
