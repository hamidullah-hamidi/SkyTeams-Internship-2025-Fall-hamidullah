import { describe, it, expect } from 'vitest';
import { QueueUsingStacks } from './question-3.js';

describe('QueueUsingStacks', () => {
  it('should handle basic queue operations', () => {
    const queue = new QueueUsingStacks();

    expect(queue.empty()).toBe(true);

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.empty()).toBe(false);
    expect(queue.peek()).toBe(1);

    expect(queue.pop()).toBe(1);
    expect(queue.peek()).toBe(2);

    expect(queue.pop()).toBe(2);
    expect(queue.peek()).toBe(3);

    expect(queue.pop()).toBe(3);
    expect(queue.empty()).toBe(true);
  });

  it('should handle empty queue operations', () => {
    const queue = new QueueUsingStacks();

    expect(queue.empty()).toBe(true);
    expect(queue.peek()).toBe(null);
    expect(queue.pop()).toBe(null);
  });
});
