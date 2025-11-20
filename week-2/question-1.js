// 1. Swap two variables without using a temporary variable Description:
// Write a program to swap the values of two variables (e.g., a and b) without using a third variable.
//  Example: Input: a = 5, b = 10 Output: a = 10, b = 5

function swapValues(a, b) {
  // way -1 (not good for large numbers, cause of overflow)
  // a = a + b;
  // b = a - b;
  // a = a - b;

  // way 2 (better)
  [a, b] = [b, a];

  return [a, b];
}

module.exports = swapValues;

console.log(swapValues(5, 7));
