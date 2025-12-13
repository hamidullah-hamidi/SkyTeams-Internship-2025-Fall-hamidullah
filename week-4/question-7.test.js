import { describe, it, expect, vi } from 'vitest';
import { rockPaperScissorsGame } from './question-7';

describe('rockPaperScissorsGame', () => {
  it('returns draw when both choose same', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(rockPaperScissorsGame('rock')).toBe('draw');
  });

  it('user wins: rock beats scissors', () => {
    vi.spyOn(Math, 'random').mockReturnValue(2 / 3);
    expect(rockPaperScissorsGame('rock')).toBe('user win');
  });

  it('user wins: paper beats rock', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(rockPaperScissorsGame('paper')).toBe('user win');
  });

  it('user wins: scissors beats paper', () => {
    vi.spyOn(Math, 'random').mockReturnValue(1 / 3);
    expect(rockPaperScissorsGame('scissors')).toBe('user win');
  });

  it('computer wins otherwise', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(rockPaperScissorsGame('scissors')).toBe('computer win');
  });
});
