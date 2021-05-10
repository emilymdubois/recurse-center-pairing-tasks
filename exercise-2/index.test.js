const lispParser = require('./index.js');

describe('lispParser', () => {
  test('string with strings, numbers, and operators should be parsed as expected', () => {
    const string = '(first (list 1 (+ 2 3) (/ 9 3)))';
    const parsed = ['first', ['list', 1, ['+', 2, 3], ['/', 9, 3]]];

    const actual = lispParser(string);
    expect(actual).toEqual(parsed);
  });
});

/*
Tokenizing - separate typing responsibility from parsing algorithm

"1000 + (3 / (4 - 5))"
[1000, "+", "(", 3, "/", "(", 4, "-", 5, ")", ")"]

* Splitting is limited
* Loop through initial array

const OPEN_PAREN = {
  token: '(',
  type: 'lParen'
};

[
  {
    token: 1000,
    type: number
  },
  OPEN_PAREN
]

Follow-up:
 * Implement tokenizing
 * Reserve recursion AST traversal
    * Use loops for same-level operations
 * Lisp interpreter
 * Merge sort
*/
