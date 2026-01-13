import { it, expect } from 'vitest';
import { Queue } from './queue.js';

it('enqueue and size work', () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  expect(queue.size()).toBe(2);
});

it('dequeue works', () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  expect(queue.dequeue()).toBe(10);
  expect(queue.size()).toBe(1);
});

it('front and rear work', () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  expect(queue.front()).toBe(10);
  expect(queue.rear()).toBe(20);
});

it('isEmpty works', () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(10);
  expect(queue.isEmpty()).toBe(false);
});

it('reverseQueue works', () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.reverseQueue();
  expect(queue.front()).toBe(30);
  expect(queue.rear()).toBe(10);
});
