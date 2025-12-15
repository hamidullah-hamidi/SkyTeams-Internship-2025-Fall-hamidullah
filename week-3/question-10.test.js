import { expect, test } from 'vitest';
import { isPrimeNumber } from './question-10';

test('prime numbers', () => {
  expect(isPrimeNumber(2)).toBe(true);
  expect(isPrimeNumber(3)).toBe(true);
  expect(isPrimeNumber(5)).toBe(true);
  expect(isPrimeNumber(7)).toBe(true);
  expect(isPrimeNumber(17)).toBe(true);
});

test('non-prime numbers', () => {
  expect(isPrimeNumber(4)).toBe(false);
  expect(isPrimeNumber(6)).toBe(false);
  expect(isPrimeNumber(8)).toBe(false);
  expect(isPrimeNumber(9)).toBe(false);
  expect(isPrimeNumber(20)).toBe(false);
});

test('edge cases: 0 and 1', () => {
  expect(isPrimeNumber(0)).toBe(false);
  expect(isPrimeNumber(1)).toBe(false);
});

test('negative numbers', () => {
  expect(isPrimeNumber(-1)).toBe(false);
  expect(isPrimeNumber(-2)).toBe(false);
  expect(isPrimeNumber(-17)).toBe(false);
});
