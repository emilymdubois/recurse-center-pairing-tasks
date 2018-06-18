const lispParser = require('./index.js');

describe('lispParser', () => {
  test('string with strings, numbers, and operators should be parsed as expected', () => {
    const string = '(first (list 1 (+ 2 3) (/ 9 3)))';
    const parsed = ['first', ['list', 1, ['+', 2, 3], ['/', 9, 3]]];

    const actual = lispParser(string);
    expect(actual).toEqual(parsed);
  });
});
