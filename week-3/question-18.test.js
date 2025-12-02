import { describe, test, expect } from 'vitest';
import { rightAngledTriangle } from './question-18.js';

describe('rightAngledTriangle', () => {
  test('prints right-angled triangle with spaces', () => {
    expect(rightAngledTriangle(4)).toEqual(['   *', '  **', ' ***', '****']);
  });

  test('returns empty array for 0 rows', () => {
    expect(rightAngledTriangle(0)).toEqual([]);
  });
});
