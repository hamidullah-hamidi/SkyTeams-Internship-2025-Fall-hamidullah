import { describe, expect, test } from 'vitest';
import { factorsOfNumber } from './question-4';

describe('find all factors of number', () => {
  test('factors of a positive number', () => {
    expect(factorsOfNumber(12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
  test('factors of a negative number', () => {
    expect(factorsOfNumber(-12)).toEqual([1, 2, 3, 4, 6, 12]);
  });
  test('factors of a zero', () => {
    expect(factorsOfNumber(0)).toEqual([]);
  });
  test('factors of 1', () => {
    expect(factorsOfNumber(1)).toEqual([1]);
  });
});
