class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insert(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === 0) {
      this.prepend(data);
      this.size++;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    return true;
  }

  remove(data) {
    if (!this.head) {
      return null;
    }

    if (this.head.data === data) {
      const removed = this.head.data;
      this.head = this.head.next;
      this.size--;
      return removed;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      const removed = current.next.data;
      current.next = current.next.next;
      this.size--;
      return removed;
    }

    return null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      const removed = this.head.data;
      this.head = this.head.next;
      this.size--;
      return removed;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const removed = current.next.data;
    current.next = current.next.next;
    this.size--;
    return removed;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
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

const list = new LinkedList();

list.append(6);
list.append(7);
list.prepend(4);
list.prepend(3);
list.insert(5, 0);
// list.remove(5);
list.printList();

console.log(list);
