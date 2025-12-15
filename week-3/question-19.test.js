import { describe, test, expect } from 'vitest';
import { pyramid } from './question-19.js';

describe('Pyramid Pattern', () => {
  test('generates a pyramid with 5 rows', () => {
    expect(pyramid(5)).toEqual(['    *', '   ***', '  *****', ' *******', '*********']);
  });

  test('returns empty array for 0 rows', () => {
    expect(pyramid(0)).toEqual([]);
  });
});
