import { describe, it, expect } from 'vitest';
import { rotateArrayToRight } from './question-3';

describe('rotateArrayToRight', () => {
  it('should rotate the array 2 times to the right', () => {
    expect(rotateArrayToRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  it('should rotate 1 time to the right', () => {
    expect(rotateArrayToRight([10, 20, 30], 1)).toEqual([30, 10, 20]);
  });

  it('should handle k = 0 (no rotation)', () => {
    expect(rotateArrayToRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should handle k larger than array length', () => {
    expect(rotateArrayToRight([1, 2, 3, 4], 6)).toEqual([3, 4, 1, 2]);
  });

  it('should handle array of length 1', () => {
    expect(rotateArrayToRight([99], 5)).toEqual([99]);
  });
});
