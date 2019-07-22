class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newHead = new Node(value, this.head, null);
    if (this.head) {
      this.head.prevNode = newHead;
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
  }

  addToTail(value) {
    const newTailObject = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.nextNode = newTailObject;
    } else {
      this.head = newTailObject;
    }
    this.tail = newTailObject;
  }
}

class Node {
  constructor(value, nextNode, prevNode) {
    this.value = value;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}
module.exports = { LinkedList, Node };
