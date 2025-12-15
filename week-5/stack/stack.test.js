import { it, expect } from 'vitest';
import { Stack } from './stack.js';

it('push and size work', () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  expect(stack.size()).toBe(2);
});

it('pop works', () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  expect(stack.pop()).toBe(20);
  expect(stack.size()).toBe(1);
});

it('top works', () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  expect(stack.top()).toBe(20);
});

it('isEmpty works', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push(10);
  expect(stack.isEmpty()).toBe(false);
});
