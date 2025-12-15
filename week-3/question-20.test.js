import { describe, it, expect } from 'vitest';
import { BMICalculator } from './question-20.js';

describe('BMICalculator', () => {
  it('should return Normal weight for BMI 22.86', () => {
    expect(BMICalculator(70, 1.75)).toBe('BMI = 22.86 (Normal weight)');
  });

  it('should return Underweight', () => {
    expect(BMICalculator(50, 1.75)).toBe('BMI = 16.33 (Underweight)');
  });

  it('should return Overweight', () => {
    expect(BMICalculator(80, 1.75)).toBe('BMI = 26.12 (Overweight)');
  });

  it('should return Obese', () => {
    expect(BMICalculator(95, 1.75)).toBe('BMI = 31.02 (Obese)');
  });
});
