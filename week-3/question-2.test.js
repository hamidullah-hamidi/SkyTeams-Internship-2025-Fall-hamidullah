import { expect, it } from 'vitest';
import { reverseNumber } from './question-2';

it('reverse a positive number', () => {
  expect(reverseNumber(1234)).toBe(4321);
  expect(reverseNumber(100)).toBe(1);
  expect(reverseNumber(7)).toBe(7);
  expect(reverseNumber(98765)).toBe(56789);
});

it('reverse a negative number', () => {
  expect(reverseNumber(-123)).toBe(-321);
  expect(reverseNumber(-1000)).toBe(-1);
});

it('reverse zero', () => {
  expect(reverseNumber(0)).toBe(0);
});
