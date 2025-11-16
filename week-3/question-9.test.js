import { expect, test } from 'vitest';
import { countElement } from './question-9';

test('count occurrences in normal array', () => {
  expect(countElement([2, 3, 2, 5, 2], 2)).toBe(3);
  expect(countElement([1, 2, 3, 4, 2], 2)).toBe(2);
  expect(countElement([5, 5, 5, 5], 5)).toBe(4);
});

test('element not in array', () => {
  expect(countElement([2, 3, 4, 5], 6)).toBe(0);
});

test('array with single element', () => {
  expect(countElement([7], 7)).toBe(1);
  expect(countElement([7], 5)).toBe(0);
});

test('empty array', () => {
  expect(countElement([], 2)).toBe(undefined);
});

test('array with negative and positive numbers', () => {
  expect(countElement([-1, 0, 1, -1, 1, -1], -1)).toBe(3);
  expect(countElement([-1, 0, 1, -1, 1, -1], 1)).toBe(2);
  expect(countElement([-1, 0, 1, -1, 1, -1], 2)).toBe(0);
});
