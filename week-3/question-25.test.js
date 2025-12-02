import { describe, it, expect } from 'vitest';
import { numberGuessingGame } from './question-25';

describe('Number Guessing Game (Simple Version)', () => {
  it("should return 'Too High' when guess is greater than secret number", () => {
    expect(numberGuessingGame(50, 80)).toBe('Too High');
  });

  it("should return 'Too Low' when guess is smaller than secret number", () => {
    expect(numberGuessingGame(50, 20)).toBe('Too Low');
  });

  it("should return 'Correct' when guess equals secret number", () => {
    expect(numberGuessingGame(50, 50)).toBe('Correct');
  });
});
