const swapValues = require('./question-1');

describe('swapValues', () => {
  test('should swap positive numbers', () => {
    expect(swapValues(10, 20)).toEqual([20, 10]);
  });

  test('should swap negative numbers', () => {
    expect(swapValues(-5, -10)).toEqual([-10, -5]);
  });

  test('should swap mixed numbers', () => {
    expect(swapValues(-3, 7)).toEqual([7, -3]);
  });

  test('should swap zeros', () => {
    expect(swapValues(0, 0)).toEqual([0, 0]);
  });

  test('should swap identical numbers', () => {
    expect(swapValues(5, 5)).toEqual([5, 5]);
  });
});
