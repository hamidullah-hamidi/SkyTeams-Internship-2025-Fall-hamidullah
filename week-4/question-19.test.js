import { describe, expect, test } from 'vitest';
import { QueueWithStacks } from './question-19';

describe('QueueWithStacks', () => {
  test('initializes empty queue', () => {
    const queue = new QueueWithStacks();
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueue adds items', () => {
    const queue = new QueueWithStacks();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBe(false);
  });

  test('dequeue returns front and removes', () => {
    const queue = new QueueWithStacks();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  test('enqueue and dequeue mixed', () => {
    const queue = new QueueWithStacks();
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });
});
