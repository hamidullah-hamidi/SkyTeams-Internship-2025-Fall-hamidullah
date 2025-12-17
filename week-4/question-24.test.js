import { describe, test, expect } from 'vitest';
import { KLargestElement } from './question-24.js';

describe('KLargestElement', () => {
  test('should return k-th largest element', () => {
    expect(KLargestElement([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test('should return largest when k=1', () => {
    expect(KLargestElement([3, 2, 1, 5, 6, 4], 1)).toBe(6);
  });

  test('should return smallest when k equals array length', () => {
    expect(KLargestElement([3, 2, 1, 5, 6, 4], 6)).toBe(1);
  });

  test('should handle duplicates', () => {
    expect(KLargestElement([3, 2, 2, 1, 1], 2)).toBe(2);
  });

  test('should handle single element', () => {
    expect(KLargestElement([5], 1)).toBe(5);
  });

  test('should handle the example array', () => {
    expect(KLargestElement([5, 4, 3, 2, 1], 4)).toBe(2);
  });
});
