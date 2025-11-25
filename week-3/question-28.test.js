import { describe, it, expect } from 'vitest';
import { removeDuplicatesFromArray } from './question-28';

describe('Remove duplicates elements from array', () => {
  it('should remove duplicates', () => {
    expect(removeDuplicatesFromArray([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  it('should return empty array if input empty', () => {
    expect(removeDuplicatesFromArray([])).toEqual([]);
  });

  it('should handle negative numbers', () => {
    expect(removeDuplicatesFromArray([-1, -1, 2, 2])).toEqual([-1, 2]);
  });
});
