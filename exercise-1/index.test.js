const Immutable = require('immutable');
const depthFirstSearcher = require('./index.js');

describe('depthFirstSearcher', () => {
  const searchTree = Immutable.fromJS({
    node: 'a',
    children: [
      {
        node: 'b',
        children: [
          {
            node: 'd',
            children: []
          },
          {
            node: 'e',
            children: []
          },
          {
            node: 'f',
            children: []
          }
        ]
      },
      {
        node: 'c',
        children: [
          {
            node: 'g',
            children: [
              {
                node: 'h',
                children: []
              }
            ]
          }
        ]
      }
    ]
  });

  test('searchNode = a should return node a', () => {
    const nodeA = searchTree;
    const actual = depthFirstSearcher(searchTree, 'a');
    expect(actual).toEqual(nodeA);
  });

  test('searchNode = b should return node b', () => {
    const nodeB = Immutable.fromJS({
      node: 'b',
      children: [
        {
          node: 'd',
          children: []
        },
        {
          node: 'e',
          children: []
        },
        {
          node: 'f',
          children: []
        }
      ]
    });
    const actual = depthFirstSearcher(searchTree, 'b');
    expect(actual).toEqual(nodeB);
  });

  test('searchNode = c should return node c', () => {
    const nodeC = Immutable.fromJS({
      node: 'c',
      children: [
        {
          node: 'g',
          children: [
            {
              node: 'h',
              children: []
            }
          ]
        }
      ]
    });
    const actual = depthFirstSearcher(searchTree, 'c');
    expect(actual).toEqual(nodeC);
  });

  test('searchNode = d should return node d', () => {
    const nodeD = Immutable.fromJS({
      node: 'd',
      children: []
    });
    const actual = depthFirstSearcher(searchTree, 'd');
    expect(actual).toEqual(nodeD);
  })

  test('searchNode = e should return node e', () => {
    const nodeE = Immutable.fromJS({
      node: 'e',
      children: []
    });
    const actual = depthFirstSearcher(searchTree, 'e');
    expect(actual).toEqual(nodeE);
  });

  test('searchNode = f should return node f', () => {
    const nodeF = Immutable.fromJS({
      node: 'f',
      children: []
    });
    const actual = depthFirstSearcher(searchTree, 'f');
    expect(actual).toEqual(nodeF);
  });

  test('searchNode = g should return node g', () => {
    const nodeG = Immutable.fromJS({
      node: 'g',
      children: [
        {
          node: 'h',
          children: []
        }
      ]
    });
    const actual = depthFirstSearcher(searchTree, 'g');
    expect(actual).toEqual(nodeG);
  });

  test('searchNode = h should return node h', () => {
    const nodeH = Immutable.fromJS({
      node: 'h',
      children: []
    });
    const actual = depthFirstSearcher(searchTree, 'h');
    expect(actual).toEqual(nodeH);
  });

  test('searchNode = i should return null', () => {
    const actual = depthFirstSearcher(searchTree, 'i');
    expect(actual).toBeNull();
  });
});
