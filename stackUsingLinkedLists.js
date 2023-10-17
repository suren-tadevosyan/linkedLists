class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
    } else {
      let current = this.top;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  peek() {
    if (!this.top) {
      return null;
    }

    let current = this.top;
    while (current.next) {
      current = current.next;
    }

    return current.data;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    }

    return false;
  }

  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
console.log(stack.getSize());
console.log(stack.peek());
