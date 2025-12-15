// 9. Grade Calculator (0–100 → A–F)
// Description: Input a student’s marks (0–100) and print the grade based on a scale.
// Example:
// Input:
// 85
// Output:
// B

function gradeCalculator(grade) {
  if (grade > 100 || grade < 0) return 'Invalid';

  if (grade > 85) return 'A';
  if (grade > 70) return 'B';
  if (grade > 55) return 'C';
  if (grade > 40) return 'D';
  if (grade > 25) return 'E';
  if (grade >= 0) return 'F';
}

console.log(gradeCalculator(85));

module.exports = gradeCalculator;
