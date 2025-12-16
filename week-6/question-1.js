// Author: hamidullah hamidi
// Date: 2025/16/11

// Question:
// Height of Binary Tree
// Write a function that returns the number of levels in a binary tree.
// An empty tree has height 0, and a tree with only one node has height 1.

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

export const treeHeight = (root) => {
  if (!root) return 0;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
  //     1      => 1
  //  2    3    => 1 + 1
  // 4 5  4 5   => 1 + 1 + 1  => 3
};

// console.log(treeHeight());
console.log(treeHeight(root));
