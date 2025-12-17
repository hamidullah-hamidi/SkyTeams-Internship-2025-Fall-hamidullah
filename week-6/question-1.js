// Author: hamidullah hamidi
// Date: 2025/16/11

// Question:  Height of Binary Tree
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

export const treeHeight = (root) => {
  if (!root) return 0;

  let hight = 0;
  const list = [root];

  // [1]
  // [2,3]
  // [4,5]

  while (list.length !== 0) {
    let levelSize = list.length;

    for (let i = 0; i < levelSize; i++) {
      let current = list.shift();

      if (current.left) list.push(current.left);
      if (current.right) list.push(current.right);
    }
    hight++;
  }

  return hight;

  //  with recursion (simple & short):
  // if (!root) return 0;
  // return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
};

// console.log(treeHeight());
console.log(treeHeight(root));
