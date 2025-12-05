import { describe, expect, test } from 'vitest';
import { intersectionOfArrays } from './question-4';

describe('intersectionOfArrays', () => {
  test('finds common elements in two normal arrays', () => {
    expect(intersectionOfArrays([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  test('returns empty array when there is no common element', () => {
    expect(intersectionOfArrays([10, 20], [30, 40])).toEqual([]);
  });

  test('works with duplicate values (should repeat matches)', () => {
    expect(intersectionOfArrays([1, 2, 2, 3], [2, 2, 4])).toEqual([2]);
  });

  test('works with negative numbers', () => {
    expect(intersectionOfArrays([-1, -2, 3], [3, -2, 10])).toEqual([3, -2]);
  });

  test('works with empty first array', () => {
    expect(intersectionOfArrays([], [1, 2, 3])).toEqual([]);
  });

  test('works with empty second array', () => {
    expect(intersectionOfArrays([1, 2, 3], [])).toEqual([]);
  });

  test('works when both arrays are empty', () => {
    expect(intersectionOfArrays([], [])).toEqual([]);
  });

  test('works when arrays contain same element multiple times', () => {
    expect(intersectionOfArrays([5, 5, 5], [5, 5])).toEqual([5]);
  });
});
