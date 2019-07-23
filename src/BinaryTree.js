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
    order === "preOrder" && iteratorFunction(this.root);

    if (this.left !== null) {
      this.left.depthFirstTraversal(iteratorFunction, order);
    }
    order === "inOrder" && iteratorFunction(this.root);
    if (this.right) {
      this.right.depthFirstTraversal(iteratorFunction, order);
    }
    order === "postOrder" && iteratorFunction(this.root);
  }

  breadthFirstTraversal(iteratorFunction) {
    const queue = [this];
    while (queue.length) {
      const treeNode = queue.shift();
      iteratorFunction(treeNode);
      treeNode.right && queue.push(treeNode.right);
      treeNode.left && queue.push(treeNode.left);
    }
  }

  getMax() {
    if (this.right) {
      return this.right.getMax();
    }
    return this.root;
  }
  getMin() {
    if (this.left) {
      return this.left.getMin();
    }
    return this.root;
  }
}

module.exports = { BinaryTree };
