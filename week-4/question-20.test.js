import { describe, expect, test } from 'vitest';
import { checkBalanced } from './question-20';

describe('checkBalanced', () => {
  test('returns true for balanced parentheses', () => {
    expect(checkBalanced('()')).toBe(true);
    expect(checkBalanced('[]')).toBe(true);
    expect(checkBalanced('{}')).toBe(true);
    expect(checkBalanced('{[()]}')).toBe(true);
  });

  test('returns false for unbalanced parentheses', () => {
    expect(checkBalanced('(')).toBe(false);
    expect(checkBalanced(']')).toBe(false);
    expect(checkBalanced('{[()}}')).toBe(false);
    expect(checkBalanced('{{)(}}')).toBe(false);
    expect(checkBalanced('([)]')).toBe(false);
  });
});
