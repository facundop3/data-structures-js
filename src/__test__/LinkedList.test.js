const { Node, LinkedList } = require("../LinkedList");

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
