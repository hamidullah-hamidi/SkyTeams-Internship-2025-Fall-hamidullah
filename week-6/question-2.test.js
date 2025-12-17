import { test } from 'vitest';
import { areIdentical, TreeNode } from './question-2';

test('both trees are null', () => {
  expect(areIdentical(null, null)).toBe(true);
});

test('one tree is null', () => {
  const root = new TreeNode(1);
  expect(areIdentical(root, null)).toBe(false);
  expect(areIdentical(null, root)).toBe(false);
});

test('identical trees', () => {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);

  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);

  expect(areIdentical(root1, root2)).toBe(true);
});

test('trees with different values', () => {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);

  const root2 = new TreeNode(1);
  root2.left = new TreeNode(3);

  expect(areIdentical(root1, root2)).toBe(false);
});

test('trees with different structures', () => {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);

  const root2 = new TreeNode(1);
  root2.right = new TreeNode(2);

  expect(areIdentical(root1, root2)).toBe(false);
});
