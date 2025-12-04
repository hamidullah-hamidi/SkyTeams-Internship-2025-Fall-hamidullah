import { describe, expect, test } from 'vitest';
import { secondLargestNumber } from './question-1';

describe('find second largest number in array', () => {
  test('finds the second largest number', () => {
    expect(secondLargestNumber([10, 20, 4, 45, 99])).toBe(45);
  });

  test('works with negative numbers', () => {
    expect(secondLargestNumber([-10, -20, -4, -45, -99])).toBe(-10);
  });

  test('works when there are duplicates', () => {
    expect(secondLargestNumber([5, 1, 5, 3, 5])).toBe(3);
  });

  test('returns null for array with 1 element', () => {
    expect(secondLargestNumber([10])).toBeNull();
  });

  test('returns null for empty array', () => {
    expect(secondLargestNumber([])).toBeNull();
  });
});

test('works when all numbers are the same', () => {
  expect(secondLargestNumber([7, 7, 7, 7])).toBeNull();
});
