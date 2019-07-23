const LinkedList = require("./LinkedList");

class HashTable {
  buckets;
  numberOfBuckets;
  constructor(size) {
    this.numberOfBuckets = size;
    this.buckets = Array(size);
  }

  HashNode = class {
    constructor(key, value, next) {
      this.key = key;
      this.value = value;
      this.next = next || null;
    }
  };

  getNotAHash(key = "") {
    const sumOfCharCodes = key
      .split("")
      .map(letter => letter.charCodeAt())
      .reduce((acc, current) => acc + current);
    const bucket = sumOfCharCodes % this.numberOfBuckets;
    return bucket;
  }

  insert(key, value) {
    const index = this.getNotAHash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new this.HashNode(key, value);
    } else if (this.buckets[index].key === key) {
      console.log("Same value");
      this.buckets[index].value = value;
    } else {
      let currentNode = this.buckets[index];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new this.HashNode(key, value);
    }
  }

  get(key) {
    const index = this.getNotAHash(key);
    return this.buckets[index];
  }
}
module.exports = { HashTable };
