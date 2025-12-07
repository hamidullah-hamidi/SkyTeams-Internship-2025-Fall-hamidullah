import { describe, it, expect } from 'vitest';
import { matrixMultiplication } from './question-16';

describe('Matrix Multiplication', () => {
  it('should multiply two 2x2 matrices correctly', () => {
    const A = [
      [1, 2],
      [3, 4],
    ];
    const B = [
      [5, 6],
      [7, 8],
    ];
    const expected = [
      [19, 22],
      [43, 50],
    ];
    expect(matrixMultiplication(A, B)).toEqual(expected);
  });

  it('should return false for incompatible matrices', () => {
    const A = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const B = [
      [7, 8],
      [9, 10],
    ];
    expect(matrixMultiplication(A, B)).toBe(false);
  });

  it('should return false for empty matrices', () => {
    expect(matrixMultiplication([], [[1, 2]])).toBe(false);
    expect(matrixMultiplication([[1, 2]], [])).toBe(false);
  });

  it('should handle 1x1 matrices', () => {
    const A = [[3]];
    const B = [[4]];
    expect(matrixMultiplication(A, B)).toEqual([[12]]);
  });
});
