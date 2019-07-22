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
});

test("Test contains", () => {
  const initialRootValue = 35;
  const valueToFind = -50;
  const newBT = new BinaryTree(initialRootValue);
  newBT.addValue(50);
  newBT.addValue(10);
  newBT.addValue(valueToFind);
  newBT.addValue(500);
  expect(newBT.contains(valueToFind)).toBe(true);
});
