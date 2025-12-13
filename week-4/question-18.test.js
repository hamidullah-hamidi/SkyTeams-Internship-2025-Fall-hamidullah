import { describe, expect, test } from 'vitest';
import { StackArray } from './question-18';

describe('StackArray', () => {
  test('initializes empty stack', () => {
    const stack = new StackArray();
    expect(stack.isEmpty()).toBe(true);
  });

  test('push adds item and peek returns top', () => {
    const stack = new StackArray();
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(2);
  });

  test('pop removes and returns top item', () => {
    const stack = new StackArray();
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
  });
});
