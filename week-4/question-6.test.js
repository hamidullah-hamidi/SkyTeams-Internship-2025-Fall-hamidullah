import { describe, it, expect } from 'vitest';
import { binarySearch } from './question-6.js';

describe('binarySearch', () => {
  it('finds target in the middle', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
  });

  it('finds target at the start', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  it('finds target at the end', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it('returns -1 when target is not present', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it('works with negative numbers', () => {
    expect(binarySearch([-10, -5, 0, 5, 10], -5)).toBe(1);
    expect(binarySearch([-10, -5, 0, 5, 10], 0)).toBe(2);
  });

  it('works with a single-element array', () => {
    expect(binarySearch([7], 7)).toBe(0);
    expect(binarySearch([7], 5)).toBe(-1);
  });

  it('works with empty array', () => {
    expect(binarySearch([], 5)).toBe(-1);
  });
});
