import { describe, it, expect } from 'vitest';
import { mergeTwoSortedArrays } from './question-2';

describe('mergeTwoSortedArrays', () => {
  it('merges two simple sorted arrays', () => {
    expect(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('handles arrays with different lengths', () => {
    expect(mergeTwoSortedArrays([1, 4], [2, 3, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('handles empty first array', () => {
    expect(mergeTwoSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('handles empty second array', () => {
    expect(mergeTwoSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('handles both arrays empty', () => {
    expect(mergeTwoSortedArrays([], [])).toEqual([]);
  });

  it('handles negative numbers', () => {
    expect(mergeTwoSortedArrays([-5, -2, 0], [-4, -1, 1])).toEqual([
      -5, -4, -2, -1, 0, 1,
    ]);
  });

  it('handles repeated numbers', () => {
    expect(mergeTwoSortedArrays([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3]);
  });
});
