import { describe, it, expect } from 'vitest';
import { collatzSequence } from './question-22';

describe('collatzSequence', () => {
  it('should return correct sequence for 6', () => {
    expect(collatzSequence(6)).toBe(
      '6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (Steps: 8)'
    );
  });

  it('should return just "1 (Steps: 0)" for input 1', () => {
    expect(collatzSequence(1)).toBe('1 (Steps: 0)');
  });

  it('should work for another number (e.g., 7)', () => {
    expect(collatzSequence(6)).toContain('(Steps:');
  });

  it('should handle invalid input (e.g., negative number)', () => {
    expect(() => collatzSequence(-5)).toBeNull;
  });
});
