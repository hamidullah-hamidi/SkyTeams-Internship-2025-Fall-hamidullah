import { describe, expect, test } from 'vitest';
import { mergeOverlappingIntervals } from './question-22';

describe('mergeOverlappingIntervals', () => {
  test('should merge overlapping intervals', () => {
    expect(
      mergeOverlappingIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
    ]);
  });

  test('should handle no overlaps', () => {
    expect(
      mergeOverlappingIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test('should handle complete overlap', () => {
    expect(
      mergeOverlappingIntervals([
        [1, 5],
        [2, 3],
      ])
    ).toEqual([[1, 5]]);
  });

  test('should handle adjacent intervals (non-overlapping)', () => {
    expect(
      mergeOverlappingIntervals([
        [1, 2],
        [2, 3],
      ])
    ).toEqual([
      [1, 2],
      [2, 3],
    ]);
  });

  test('should handle single interval', () => {
    expect(mergeOverlappingIntervals([[1, 3]])).toEqual([[1, 3]]);
  });

  test('should handle empty array', () => {
    expect(mergeOverlappingIntervals([])).toEqual([]);
  });

  test('should handle multiple overlaps', () => {
    expect(
      mergeOverlappingIntervals([
        [1, 4],
        [2, 3],
        [5, 7],
        [6, 8],
      ])
    ).toEqual([
      [1, 4],
      [5, 8],
    ]);
  });
});
