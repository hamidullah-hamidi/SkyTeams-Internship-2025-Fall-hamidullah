import { expect, test } from 'vitest';
import { smallestNumber } from './question-6';

test('smallest number in normal array', () => {
  expect(smallestNumber([4, 7, 1, 9, 2])).toBe(1);
  expect(smallestNumber([10, 20, 5, 15])).toBe(5);
  expect(smallestNumber([3, 3, 3])).toBe(3);
  expect(smallestNumber([-5, -2, -9, -1])).toBe(-9);
});

test('smallest number in single element array', () => {
  expect(smallestNumber([7])).toBe(7);
});

test('smallest number in empty array', () => {
  expect(smallestNumber([])).toBe(undefined);
});

test('smallest number with negative and positive numbers', () => {
  expect(smallestNumber([-10, 0, 5, 8, -2])).toBe(-10);
});
