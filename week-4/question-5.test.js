import { describe, it, expect } from 'vitest';
import { rearrangeArray } from './question-5';

describe('rearrangeArray', () => {
  it('moves even numbers before odd numbers', () => {
    expect(rearrangeArray([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6, 1, 5, 3]);
  });

  it('works with all even numbers', () => {
    expect(rearrangeArray([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  it('works with all odd numbers', () => {
    expect(rearrangeArray([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
  });

  it('works with negative numbers', () => {
    expect(rearrangeArray([-1, -2, -3, -4])).toEqual([-2, -4, -3, -1]);
  });

  it('works with empty array', () => {
    expect(rearrangeArray([])).toEqual([]);
  });

  it('moves even numbers before odd numbers without maintaining internal order', () => {
    expect(rearrangeArray([10, 1, 8, 3, 6, 5])).toEqual([10, 8, 6, 3, 1, 5]);
  });
});
