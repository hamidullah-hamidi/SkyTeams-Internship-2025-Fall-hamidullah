// Author: hamidullah hamidi
// Date: 2025/18/11

// Question:  Body Mass Index (BMI) Calculator

// Description: Given weight (kg) and height (m), calculate BMI using:
// BMI = weight / (height * height)
// Then categorize it into:
// • Underweight: BMI < 18.5
// • Normal weight: 18.5 ≤ BMI < 25
// • Overweight: 25 ≤ BMI < 30
// • Obese: BMI ≥ 30
// Example:
// Input:
// 70, 1.75
// Output:
// BMI = 22.86 (Normal weight)

export const BMICalculator = (weight, height) => {
  const BMI = (weight / (height * height)).toFixed(2);
  let result = '';

  if (BMI < 18.5) result = 'Underweight';
  else if (BMI >= 18.5 && BMI < 25) result = 'Normal weight';
  else if (BMI >= 25 && BMI < 30) result = 'Overweight';
  else if (BMI >= 30) result = 'Obese';

  return `BMI = ${BMI} (${result})`;
};
console.log(BMICalculator(70, 1.75));
