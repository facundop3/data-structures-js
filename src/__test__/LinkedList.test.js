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
