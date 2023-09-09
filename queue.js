/*

- enqueue
- dequeue
- peek
- isEmpty
- print


*/

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  dequeue() {
    delete this.items[this.frontIndex];
    this.frontIndex++;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.backIndex === 0;
  }

  print() {
    return this.items;
  }
}

const newQueue = new Queue();
console.log(newQueue.isEmpty());

newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);

newQueue.dequeue();

console.log(newQueue.peek());
console.log(newQueue.isEmpty());
console.log(newQueue.print());
