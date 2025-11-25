// Author: hamidullah hamidi
// Date: 2025/18/11

// Question:  Password Strength Checker

// Description: A strong password must:
// • Be at least 8 characters long.
// • Contain at least one uppercase letter, one lowercase letter, and one number.
// Example:
// Input:
// MyPass123
// Output:
// Strong
// Input:
// pass
// Output:
// Weak

export const passwordChecker = (password) => {
  if (password.length < 8) return 'Week';

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;

  for (let e of password) {
    if (e >= 'A' && e <= 'Z') hasUpperCase = true;
    if (e >= 'a' && e <= 'z') hasLowerCase = true;
    if (e >= '0' && e <= '9') hasDigit = true;
  }

  if (hasUpperCase && hasLowerCase && hasDigit) return 'Strong';

  return 'Week';
};

console.log(passwordChecker('MyPass123'));
console.log(passwordChecker('password'));
