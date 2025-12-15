import { expect, test } from 'vitest';
import { largestNumber } from './question-5';

test('largest number in normal array', () => {
  expect(largestNumber([2, 8, 5, 3, 9])).toBe(9);
  expect(largestNumber([1, 2, 3, 4, 5])).toBe(5);
  expect(largestNumber([10, 10, 10])).toBe(10);
  expect(largestNumber([-5, -2, -9, -1])).toBe(-1);
});

test('largest number in single element array', () => {
  expect(largestNumber([7])).toBe(7);
});

test('largest number in empty array', () => {
  expect(largestNumber([])).toBe(undefined);
});

test('largest number with negative and positive numbers', () => {
  expect(largestNumber([-10, 0, 5, 8, -2])).toBe(8);
});
