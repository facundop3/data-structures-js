const { LinkedList, Node } = require("./src/LinkedList");
const { BinaryTree } = require("./src/BinaryTree");
const { HashTable } = require("./src/HashTable");

const test = new HashTable(40);

test.insert("Facundo", 101);
test.insert("FAcundo", 102);
test.insert("Facundo", 103);
test.insert("oFacund", 103);

console.log("get value", test.get("oFacund").value);
console.log(test);
console.log(test.retriveAll());
