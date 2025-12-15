import { describe, it, expect } from 'vitest';
import { findUniqueElements } from './question-27';

describe('findUniqueElements', () => {
  it('should return unique elements for a simple array', () => {
    expect(findUniqueElements([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the same array if all elements are unique', () => {
    expect(findUniqueElements([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return empty array if input is empty', () => {
    expect(findUniqueElements([])).toEqual([]);
  });

  it('should handle negative numbers and duplicates', () => {
    expect(findUniqueElements([1, -1, 2, -1, 3, 1])).toEqual([1, -1, 2, 3]);
  });

  it('should handle strings as elements', () => {
    expect(findUniqueElements(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });
});
