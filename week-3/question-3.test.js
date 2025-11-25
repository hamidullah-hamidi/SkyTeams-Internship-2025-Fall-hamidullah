import { expect, test } from 'vitest';
import { sumDigits } from './question-3';

test('sum digits of a normal positive number', () => {
  expect(sumDigits(12345)).toBe(15);
  expect(sumDigits(99)).toBe(18);
  expect(sumDigits(1001)).toBe(2);
});

test('sum digits of a single digit number', () => {
  expect(sumDigits(5)).toBe(5);
  expect(sumDigits(0)).toBe(0);
});

test('sum digits of a large number', () => {
  expect(sumDigits(987654321)).toBe(45);
});

test('sum digits of a negative number', () => {
  expect(sumDigits(-123)).toBe(6);
});
