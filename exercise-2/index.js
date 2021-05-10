/**
 * A simple Lisp parser.
 *
 * @function lispParser
 * @param string {string} - A Lisp string to parse.
 * @returns {array} - An array containing a parsed result.
 */
function lispParser(string) {
  // Splitting the string on nothing will result in an array where each index is
  // one character in the string.
  let initialArray = string.split('');

  function parse(input, current, parents) {
    // If we've iterated through all entries, return the current AST.
    if (!input.length) return current;

    const element = input[0];
    const elementType = getElementType(element);
    const nextInput = input.slice(1);

    // If element is a space, no-op.
    if (elementType === 'space') {
      return parse(nextInput, current, parents);
    }

    // If element is an open parenthesis, then we are initializing a new array.
    // Take the current value, and store it on the parents array. Then, call the
    // parse function on a new array.
    if (elementType === 'openParenthesis') {
      parents.push(current);
      return parse(nextInput, [], parents);
    }

    // If the element is a closed parenthesis, then we've completed an array.
    // Get the last parent from the parents array, add the current array to it,
    // then call the parse function with that parent AST as the current AST.
    // When we're on the final closed parenthesis and thus do not have a parent,
    // call the parse function with the current AST.
    if (elementType === 'closedParenthesis') {
      const parent = parents.pop();
      if (parent) {
        parent.push(current);
        return parse(nextInput, parent, parents);
      }
      return parse(nextInput, current, parents);
    }

    // If the element is a number, add it to the current AST.
    if (elementType === 'number') {
      current.push(Number(element));
      return parse(nextInput, current, parents);
    }

    // If the element is an operator, add it to the current AST.
    if (elementType === 'operator') {
      current.push(element);
      return parse(nextInput, current, parents);
    }

    // If the element is a string, either push it to the current AST, or append
    // it to the last item in the current AST.
    if (elementType === 'string') {
      const lastIndex = current.length - 1;
      const lastValue = current[lastIndex];
      if (lastValue && typeof lastValue === 'string') {
        current[lastIndex] = current[lastIndex] + element;
        return parse(nextInput, current, parents);
      } else {
        return parse(nextInput, [element], parents);
      }
    }
  }

  const response = parse(initialArray, null, []);
  return response;
};

function getElementType(element) {
  const operators = ['+', '-', '*', '/'];

  if (!isNaN(parseFloat(element))) return 'number';
  if (operators.indexOf(element) !== -1) return 'operator';
  if (element === '(') return 'openParenthesis';
  if (element === ')') return 'closedParenthesis';
  if (/\s/.test(element)) return 'space';
  if (typeof element === 'string') return 'string';

  throw new Error(`Unknown element ${element}!`);
}

module.exports = lispParser;
