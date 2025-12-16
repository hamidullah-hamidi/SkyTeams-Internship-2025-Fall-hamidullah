import { describe, it, expect } from 'vitest';
import { backspaceCompare } from './question-5.js';

describe('backspaceCompare', () => {
  it('should return true for the given example', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  });

  it('should return true for strings that become equal after backspaces', () => {
    expect(backspaceCompare('a#c', 'b#c')).toBe(true);
  });

  it('should return false for strings that are different', () => {
    expect(backspaceCompare('a#c', 'b#d')).toBe(false);
  });
});
