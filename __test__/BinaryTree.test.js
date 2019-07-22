const { BinaryTree } = require("../src/BinaryTree");

test("Test BinaryTree initial state", () => {
  const firstRootValue = 100;
  const newBT = new BinaryTree(firstRootValue);
  expect(newBT.left).toBe(null);
  expect(newBT.right).toBe(null);
  expect(newBT.root).toBe(firstRootValue);
});

test("Test addValue", () => {
  const [firstValue, secondValue, thirdValue] = [100, 80, 110];
  const newBT = new BinaryTree(firstValue);
  newBT.addValue(secondValue);
  expect(newBT.left.root).toBe(secondValue);
  newBT.addValue(thirdValue);
  expect(newBT.right.root).toBe(thirdValue);
  expect(newBT.addValue(secondValue)).toBeFalsy();
});

test("Test contains", () => {
  const valueToFind = -50;
  const newBT = new BinaryTree();
  newBT.addValue(35);
  expect(newBT.root).toBe(35);
  newBT.addValue(50);
  newBT.addValue(10);
  newBT.addValue(valueToFind);
  newBT.addValue(500);
  expect(newBT.contains(valueToFind)).toBe(true);
  expect(newBT.contains(123)).toBe(false);
  expect(newBT.contains(1000)).toBe(false);
});

test("Test depthFirstTraversal", () => {
  // Test inOrder
  const input = [30, 70, 90, 20, 10, 100];
  let output = [];
  const funct = e => {
    output.push(e);
  };
  const sortMethod = (a, b) => a - b;
  const newBT = new BinaryTree();
  input.map(i => newBT.addValue(i));
  newBT.depthFirstTraversal(funct);
  expect(output).toEqual(input.sort(sortMethod));
});
