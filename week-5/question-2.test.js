import { describe, it, expect } from 'vitest';
import { MinStack } from './MinStack.js';

describe('MinStack', () => {
  it('push, pop, top, getMin', () => {
    const stack = new MinStack();

    stack.push(10);
    stack.push(20);
    stack.push(5);
    stack.push(13);
    stack.push(2);

    expect(stack.getMin()).toBe(2);
    expect(stack.top()).toBe(2);

    stack.pop();
    expect(stack.getMin()).toBe(5);
    expect(stack.top()).toBe(13);

    stack.pop();
    expect(stack.getMin()).toBe(5);
    expect(stack.top()).toBe(5);

    stack.push(1);
    expect(stack.getMin()).toBe(1);
    expect(stack.top()).toBe(1);

    stack.pop();
    expect(stack.getMin()).toBe(5);
  });
});
