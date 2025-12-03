const multiplicationTable = require('./question-18');

describe('multiplicationTable', () => {
  test('should print correct multiplication table up to 10', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    multiplicationTable(5);

    const expected = [
      '5 * 1 = 5',
      '5 * 2 = 10',
      '5 * 3 = 15',
      '5 * 4 = 20',
      '5 * 5 = 25',
      '5 * 6 = 30',
      '5 * 7 = 35',
      '5 * 8 = 40',
      '5 * 9 = 45',
      '5 * 10 = 50',
    ];

    expected.forEach((line, index) => {
      expect(consoleSpy.mock.calls[index][0]).toBe(line);
    });

    consoleSpy.mockRestore();
  });
});
