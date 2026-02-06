const { TreeNode, treeHeight } = require('./question-1');

test('height of empty tree', () => {
  expect(treeHeight(null)).toBe(0);
});

test('height of single node', () => {
  const root = new TreeNode(1);
  expect(treeHeight(root)).toBe(1);
});

test('height of balanced tree', () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  expect(treeHeight(root)).toBe(3);
});
