import { describe, it, expect } from 'vitest';
import { pascalTriangle } from './question-24.js';

describe('pascalTriangle', () => {
  it('should generate Pascal’s Triangle for 1 row', () => {
    expect(pascalTriangle(1)).toEqual([[1]]);
  });

  it('should generate Pascal’s Triangle for 3 rows', () => {
    expect(pascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  it('should generate Pascal’s Triangle for 5 rows', () => {
    expect(pascalTriangle(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  it('should return empty array when rows = 0', () => {
    expect(pascalTriangle(0)).toEqual([]);
  });

  it('should return empty array when rows is negative', () => {
    expect(pascalTriangle(-5)).toEqual([]);
  });
});
