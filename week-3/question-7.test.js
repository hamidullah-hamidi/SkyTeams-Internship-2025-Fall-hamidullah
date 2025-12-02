import { expect, test } from 'vitest';
import { sumOfArrayElements } from './question-7';

test('sum of a normal array', () => {
  expect(sumOfArrayElements([1, 2, 3, 4, 5])).toBe(15);
  expect(sumOfArrayElements([10, 20, 30])).toBe(60);
  expect(sumOfArrayElements([5, 5, 5])).toBe(15);
});

test('sum of a single element array', () => {
  expect(sumOfArrayElements([7])).toBe(7);
});

test('sum of an empty array', () => {
  expect(sumOfArrayElements([])).toBe(undefined);
});

test('sum of array with negative numbers', () => {
  expect(sumOfArrayElements([-1, -2, -3, -4])).toBe(-10);
  expect(sumOfArrayElements([-5, 10, -3])).toBe(2);
});
