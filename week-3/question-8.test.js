import { describe, expect, test } from 'vitest';
import { findElement } from './question-8';

describe('find number in array', () => {
  test('element is in the array', () => {
    expect(findElement([3, 6, 9, 12], 6)).toBe('Found');
    expect(findElement([1, 2, 3, 4, 5], 3)).toBe('Found');
    expect(findElement(['a', 'b', 'c'], 'b')).toBe('Found');
  });

  test('element is not in the array', () => {
    expect(findElement([3, 6, 9, 12], 7)).toBe('Not found');
    expect(findElement([1, 2, 3, 4, 5], 10)).toBe('Not found');
    expect(findElement(['a', 'b', 'c'], 'd')).toBe('Not found');
  });

  test('empty array', () => {
    expect(findElement([], 5)).toBe('Not found');
  });

  test('array with different types', () => {
    expect(findElement([1, '1', true, false], 1)).toBe('Found');
    expect(findElement([1, '1', true, false], '1')).toBe('Found');
    expect(findElement([1, '1', true, false], true)).toBe('Found');
    expect(findElement([1, '1', true, false], null)).toBe('Not found');
  });
});
