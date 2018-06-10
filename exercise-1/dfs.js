/* @flow */

const tree = {
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
}
let response;

declare type SearchTree = {
  node: string,
  children: Array<SearchTree>
}

/**
 * A depth-first searcher function that returns the search tree at the node
 * provided.
 *
 * @function depthFirstSearcher
 * @param searchTree SearchTree - A tree of nodes and associated children.
 * @param searchNode string - A node in the search tree.
 */
function depthFirstSearcher(searchTree, searchNode) {
  if (searchTree.node === searchNode) return searchTree;
  if (searchTree.children.length === 0) return;
  if (searchTree.children.length) {
    for (const child of searchTree.children) {
      response = depthFirstSearcher(child, searchNode);
    }
  }
  return response;
};

const result = depthFirstSearcher(tree, 'g')
console.log(result);
