/*

If we want to implement the stack data structure - we have to keep in mind certain things
- Stack is LIFO Structure 
It has some mandatory function like
- Push 
- Pop
- Peek
- isEmpty
- Print
These are the mandatory function stack data structure contains.

*/

class Stack {
  STACK_SIZE = 4;
  constructor() {
    this.arr = [];
  }

  push(item) {
    if (this.arr.length === this.STACK_SIZE) return "overflow";
    this.arr.push(item);
  }

  pop() {
    if (this.arr.length === 0) return "underflow";
    this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  print() {
    this.arr.map((item) => {
      console.log(item);
    });
  }
}

const createStack = new Stack();

createStack.push(4);
createStack.push(5);
createStack.push(6);
console.log(createStack.isEmpty());
createStack.pop();
console.log(createStack.peek());
console.log(createStack.print());
