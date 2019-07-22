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

  removeHead() {
    if (!this.head) return false;
    this.head = this.head.nextNode;
    if (this.head) {
      this.head.prevNode = null;
    } else {
      this.tail = null;
    }
  }

  removeTail() {
    if (!this.tail) return false;
    this.tail = this.tail.prevNode;
    if (this.tail) {
      this.tail.nextNode = null;
    } else {
      this.head = null;
    }
  }

  searchValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
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
