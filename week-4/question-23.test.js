import { describe, test, expect } from 'vitest';
import topKFrequentElements from './question-23.js';

describe('topKFrequentElements', () => {
  test('should return top k frequent elements', () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('should handle larger frequencies', () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 5, 5, 5, 5, 5, 3], 2)).toEqual([5, 1]);
  });

  test('should return single element when k=1', () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 1)).toEqual([1]);
  });

  test('should handle all same frequency', () => {
    expect(topKFrequentElements([1, 2, 3], 2).length).toBe(2);
  });

  test('should handle k larger than unique', () => {
    expect(topKFrequentElements([1, 1, 2], 5)).toEqual([1, 2]);
  });
});
