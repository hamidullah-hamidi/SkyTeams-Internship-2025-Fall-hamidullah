// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Determine if Two Trees Are Identical
// Write a function that checks whether two binary trees are identical in both structure and node values.

export class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

export const areIdentical = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  if (root1.value !== root2.value) return false;

  return areIdentical(root1.left, root2.left) && areIdentical(root1.right, root2.right);
};

console.log(areIdentical(root1, root2));
