import { it, expect } from 'vitest';
import { SinglyLinkedList } from './LinkedList';

it('insertLast works', () => {
  const list = new SinglyLinkedList();
  list.insertLast(10);
  list.insertLast(20);

  expect(list.print()).toEqual([10, 20]);
});

it('insertFirst works', () => {
  const list = new SinglyLinkedList();
  list.insertLast(10);
  list.insertFirst(5);

  expect(list.print()).toEqual([5, 10]);
});

it('deleteFirst works', () => {
  const list = new SinglyLinkedList();
  list.insertLast(10);
  list.insertLast(20);
  list.deleteFirst();

  expect(list.print()).toEqual([20]);
});
