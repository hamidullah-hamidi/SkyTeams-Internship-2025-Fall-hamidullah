import { describe, it, expect } from 'vitest';
import { rightAngledTriangle } from './question-17.js';

describe('rightAngledTriangle', () => {
  it('should print a right-angled triangle of 1 row', () => {
    expect(rightAngledTriangle(1)).toBe('*');
  });

  it('should print a triangle of 3 rows', () => {
    expect(rightAngledTriangle(3)).toBe('*\n**\n***');
  });

  it('should print a triangle of 5 rows', () => {
    expect(rightAngledTriangle(5)).toBe('*\n**\n***\n****\n*****');
  });

  it('should return empty string for 0 rows', () => {
    expect(rightAngledTriangle(0)).toBe('');
  });
});
