import { describe, it, expect } from 'vitest';
import { setMatrixZeros } from './question-25.js';

describe('setMatrixZeros', () => {
  it('should set row and column to zero for zero element', () => {
    const matrix = [
      [1, 2, 3],
      [2, 0, 5],
      [4, 3, 2],
    ];
    const expected = [
      [1, 0, 3],
      [0, 0, 0],
      [4, 0, 2],
    ];
    expect(setMatrixZeros(matrix)).toEqual(expected);
  });

  it('should handle matrix with no zeros', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [1, 2],
      [3, 4],
    ];
    expect(setMatrixZeros(matrix)).toEqual(expected);
  });

  it('should handle matrix with zeros in first row', () => {
    const matrix = [
      [0, 2],
      [3, 4],
    ];
    const expected = [
      [0, 0],
      [0, 4],
    ];
    expect(setMatrixZeros(matrix)).toEqual(expected);
  });
});
