import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './question-6.js';

describe('removeDuplicates', () => {
  it('should remove adjacent duplicates from the example', () => {
    expect(removeDuplicates('abbaca')).toBe('ca');
  });

  it('should handle no duplicates', () => {
    expect(removeDuplicates('abcd')).toBe('abcd');
  });

  it('should remove all characters if all are duplicates', () => {
    expect(removeDuplicates('aa')).toBe('');
  });
});
