class BinaryTree {
  constructor(root = null, left = null, right = null) {
    this.root = root;
    this.left = left;
    this.right = right;
  }

  addValue(value) {
    if (this.root === null) {
      this.root = new BinaryTree(value);
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
}

module.exports = { BinaryTree };
