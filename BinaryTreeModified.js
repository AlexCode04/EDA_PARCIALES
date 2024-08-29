class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new TreeNode(value);
  
      if (this.root === null) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }

    preOrder(node = this.root) {
      if (!node) {
        return;
      }
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  
    postOrder(node = this.root) {
      if (!node) {
        return;
      }
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  
    inOrder(node = this.root) {
      if (!node) {
        return;
      }
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  
    calculateHeight(node = this.root) {
      if (!node) {
        return 0;
      }
      const leftHeight = this.calculateHeight(node.left);
      const rightHeight = this.calculateHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    countSize(node = this.root) {
      if (!node) {
        return 0;
      }
      return 1 + this.countSize(node.left) + this.countSize(node.right);
    }
  }
  
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(20);
  tree.insert(3);
  tree.insert(7);
  tree.insert(15);
  tree.insert(30);
  
  console.log("PreOrder:");
  tree.preOrder();
  
  console.log("InOrder:");
  tree.inOrder();
  
  console.log("PostOrder:");
  tree.postOrder();
  
  console.log("Altura del árbol:", tree.calculateHeight());
  console.log("Tamaño del árbol:", tree.countSize());
  