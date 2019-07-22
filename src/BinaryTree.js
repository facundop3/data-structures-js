class BinaryTree {
  constructor(root = null, left = null, right = null) {
    this.root = root;
    this.left = left;
    this.right = right;
  }

  addValue(value) {
    if (this.root === null) {
      this.root = value;
    } else {
      if (this.root === value) return false;
      if (this.root > value) {
        if (this.left === null) {
          this.left = new BinaryTree(value);
        } else {
          return this.left.addValue(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BinaryTree(value, null, null);
        } else {
          return this.right.addValue(value);
        }
      }
    }
  }

  contains(value) {
    if (this.root === value) return true;
    if (this.root > value) {
      if (this.left !== null) {
        return this.left.contains(value);
      }
      return false;
    } else {
      if (this.right !== null) {
        return this.right.contains(value);
      }
      return false;
    }
  }

  depthFirstTraversal(iteratorFunction, order = "inOrder") {
    if (order === "preOrder") {
      iteratorFunction(this.root);
    }
    if (this.left !== null) {
      this.left.depthFirstTraversal(iteratorFunction, order);
    }
    order === "inOrder" && iteratorFunction(this.root);
    if (this.right) {
      this.right.depthFirstTraversal(iteratorFunction, order);
    }
  }
}

module.exports = { BinaryTree };
