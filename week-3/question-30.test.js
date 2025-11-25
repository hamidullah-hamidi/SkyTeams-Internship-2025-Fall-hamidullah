import { describe, it, expect } from 'vitest';
import { findMissingNumber } from './question-30';

describe('findMissingNumber', () => {
  it('should find the missing number in a sorted array', () => {
    expect(findMissingNumber([1, 2, 4, 5])).toBe(3);
  });

  it('should work even if the array is not sorted', () => {
    expect(findMissingNumber([4, 1, 5, 2])).toBe(3);
  });

  it('should find the first missing number', () => {
    expect(findMissingNumber([2, 3, 4, 5])).toBe(1);
  });
});
