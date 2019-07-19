class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(value) {
    const newHead = new Node(value, this.head, null);
    if (this.head) {
      this.head.prevNode = newHead;
    } else {
      this.tail = newHead;
    }
  }

  //   getTail(){
  //       if(this.head !== null){
  //         if(this.head.nextNode!== null){
  //             return this.head.nextNode
  //         } else {
  //             return this.head
  //         }
  //       }else {
  //           return null
  //       }
  //   }
}

class Node {
  constructor(value, nextNode, prevNode) {
    this.value = value;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}
module.exports = { LinkedList, Node };
