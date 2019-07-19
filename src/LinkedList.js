class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(value) {
    this.head = new Node(value, this.head, null);
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
