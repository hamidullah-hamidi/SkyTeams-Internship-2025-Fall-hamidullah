import { describe, test, expect } from 'vitest';
import { passwordChecker } from './question-21';

describe('Password strength checker', () => {
  test('check strong passwords', () => {
    expect(passwordChecker('hamid')).toBe('Week');
    expect(passwordChecker('pass123')).toBe('Week');
    expect(passwordChecker('haMid')).toBe('Week');
  });

  test('check week passwords', () => {
    expect(passwordChecker('hamidH123')).toBe('Strong');
    expect(passwordChecker('pass123Hamid')).toBe('Strong');
    expect(passwordChecker('haMid1234')).toBe('Strong');
  });
});
