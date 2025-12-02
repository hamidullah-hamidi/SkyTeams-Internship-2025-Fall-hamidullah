import { describe, it, expect } from 'vitest';
import { isEqualArrays } from './question-29';

describe('isEqualArrays', () => {
  it('should return true for equal arrays', () => {
    expect(isEqualArrays([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  it('should return false for arrays with different lengths', () => {
    expect(isEqualArrays([1, 2, 3], [1, 2])).toBe(false);
  });

  it('should return false for arrays with same length but different values', () => {
    expect(isEqualArrays([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  it('should return true for empty arrays', () => {
    expect(isEqualArrays([], [])).toBe(true);
  });

  it('should return false when order is different', () => {
    expect(isEqualArrays([1, 2, 3], [3, 2, 1])).toBe(false);
  });
});
