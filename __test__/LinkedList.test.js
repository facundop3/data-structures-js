const { Node, LinkedList } = require("../src/LinkedList");

test("Checks initial Node state", () => {
  const testNode = new Node(1, null, null);
  expect(testNode.value).toBe(1);
  expect(testNode.prevNode).toBe(null);
  expect(testNode.nextNode).toBe(null);
});

test("Checks initial LinkedList state", () => {
  const testLinkedList = new LinkedList();
  expect(testLinkedList.head).toBe(null);
  expect(testLinkedList.tail).toBe(null);
});

test("Test addToHead ", () => {
  const testLinkedList = new LinkedList();
  const firstValue = "head and tail value";
  const newValue = "New headValue";
  testLinkedList.addToHead(firstValue);
  expect(testLinkedList.head.value).toBe(firstValue);
  expect(testLinkedList.head.prevNode).toBe(null);
  expect(testLinkedList.tail.value).toBe(firstValue);
  expect(testLinkedList.tail.nextNode).toBe(null);
  testLinkedList.addToHead(newValue);
  expect(testLinkedList.head.value).toBe(newValue);
  expect(testLinkedList.tail.value).toBe(firstValue);
  // Testing links
  expect(testLinkedList.tail.prevNode).toEqual(testLinkedList.head);
  expect(testLinkedList.tail.nextNode).toBe(null);
  expect(testLinkedList.head.nextNode).toEqual(testLinkedList.tail);
  expect(testLinkedList.head.prevNode).toBe(null);
});

test("Test addToTail ", () => {
  const testLinkedList = new LinkedList();
  const firstValue = "head and tail value";
  const newValue = "New headValue";
  testLinkedList.addToTail(firstValue);
  expect(testLinkedList.head.value).toBe(firstValue);
  expect(testLinkedList.tail.value).toBe(firstValue);
  testLinkedList.addToTail(newValue);
  expect(testLinkedList.head.value).toBe(firstValue);
  expect(testLinkedList.head.prevNode).toBe(null);
  expect(testLinkedList.tail.value).toBe(newValue);
  expect(testLinkedList.tail.nextNode).toBe(null);
  // Testing links
  expect(testLinkedList.tail.prevNode).toEqual(testLinkedList.head);
  expect(testLinkedList.tail.nextNode).toBe(null);
  expect(testLinkedList.head.nextNode).toEqual(testLinkedList.tail);
  expect(testLinkedList.head.prevNode).toBe(null);
});

test("Test removeHead", () => {
  const brandNewLinkedList = new LinkedList();
  const testLinkedList = new LinkedList();
  testLinkedList.addToHead(1);
  testLinkedList.removeHead();
  expect(testLinkedList).toEqual(brandNewLinkedList);
  testLinkedList.addToHead(1);
  testLinkedList.addToHead(2);
  testLinkedList.addToHead(3);
  testLinkedList.removeHead();
  expect(testLinkedList.head.value).toBe(2);
  expect(testLinkedList.head.nextNode.value).toBe(1);
});

test("Test removeTail", () => {
  const brandNewLinkedList = new LinkedList();
  const testLinkedList = new LinkedList();
  testLinkedList.addToHead(1);
  testLinkedList.removeTail();
  expect(testLinkedList).toEqual(brandNewLinkedList);
  testLinkedList.addToHead(1);
  testLinkedList.addToTail("to delete");
  testLinkedList.removeTail();
  expect(testLinkedList.head.value).toBe(1);
  expect(testLinkedList.tail.value).toBe(1);
});

test("Test searchValue", () => {
  const testLinkedList = new LinkedList();
  const valueToFind = "Value to find";
  testLinkedList.addToHead(1);
  testLinkedList.addToHead(2);
  testLinkedList.addToHead(3);
  testLinkedList.addToHead(4);
  testLinkedList.addToTail(valueToFind);
  expect(testLinkedList.searchValue(valueToFind).value).toBe(valueToFind);
  testLinkedList.removeTail();
  expect(testLinkedList.searchValue(valueToFind).value).toBeFalsy();
});

test("Test firstIndexOf", () => {
  const testLinkedList = new LinkedList();
  const valueToFind = "value to find";
  testLinkedList.addToHead(valueToFind);
  expect(testLinkedList.firstIndexOf(valueToFind)).toBe(0);
  testLinkedList.addToHead(1);
  testLinkedList.addToHead(2);
  expect(testLinkedList.firstIndexOf(valueToFind)).toBe(2);
});

test("Test indexOf", () => {
  const testLinkedList = new LinkedList();
  const valueToFind = "value to find";
  testLinkedList.addToHead(5);
  testLinkedList.addToHead(valueToFind);
  testLinkedList.addToHead(3);
  testLinkedList.addToHead(valueToFind);
  testLinkedList.addToHead(1);
  testLinkedList.addToHead(0);
  expect(testLinkedList.indexOf(valueToFind)).toEqual([2, 4]);
});
