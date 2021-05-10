/**
 * A depth-first searcher function that returns the search tree at the node
 * provided.
 *
 * @function depthFirstSearcher
 * @param searchTree Immutable.Map - A tree of nodes and associated children.
 * @param searchNode string - A node in the search tree.
 */
function depthFirstSearcher(searchTree, searchNode) {
  if (searchTree.get('node') === searchNode) return searchTree;
  const children = searchTree.get('children');
  for (const child of children) {
    let response;
    response = depthFirstSearcher(child, searchNode);
    if (response) return response;
  }

  return null;
};

module.exports = depthFirstSearcher;
