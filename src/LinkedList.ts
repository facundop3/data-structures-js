export default class LinkedList {
  head: null | linkedListNode;
  tail: null | linkedListNode;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newHead = new linkedListNode(value, this.head, null);
    if (this.head) {
      this.head.prevNode = newHead;
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
  }

  addToTail(value) {
    const newTailObject = new linkedListNode(value, null, this.tail);
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

  searchValue(value: any) {
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
  indexOf(value: any) {
    let currentNode = this.head;
    let count = 0;
    let indexs = [];
    while (currentNode) {
      if (currentNode.value === value) {
        indexs.push(count);
      }
      count++;
      currentNode = currentNode.nextNode;
    }

    return indexs;
  }
  firstIndexOf(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }
}

class linkedListNode {
  constructor(
    public value: any,
    public nextNode: linkedListNode,
    public prevNode: linkedListNode
  ) {
    // this.value = value;
    // this.nextNode = nextNode;
    // this.prevNode = prevNode;
  }
}
