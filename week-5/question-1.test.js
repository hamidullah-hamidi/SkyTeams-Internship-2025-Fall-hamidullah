import { it, expect } from 'vitest';
import { validParentheses } from './question-1.js';

it('valid parentheses', () => {
  expect(validParentheses('()')).toBe(true);
  expect(validParentheses('[]')).toBe(true);
  expect(validParentheses('{}')).toBe(true);
  expect(validParentheses('()[]{}')).toBe(true);
  expect(validParentheses('[{()}]')).toBe(true);
});

it('invalid parentheses', () => {
  expect(validParentheses('(]')).toBe(false);
  expect(validParentheses('([)]')).toBe(false);
  expect(validParentheses('{[}]')).toBe(false);
  expect(validParentheses('())')).toBe(false);
});

it('empty string', () => {
  expect(validParentheses('')).toBe(true);
});
