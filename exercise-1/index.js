/**
 * A depth-first searcher function that returns the search tree at the node
 * provided.
 *
 * @function depthFirstSearcher
 * @param searchTree Immutable.Map - A tree of nodes and associated children.
 * @param searchNode string - A node in the search tree.
 */
function depthFirstSearcher(searchTree, searchNode) {
  let response;

  function searchTreeByNode(searchTree, searchNode) {
    if (searchTree.get('node') === searchNode) response = searchTree;
    const children = searchTree.get('children');
    for (const child of children) {
      searchTreeByNode(child, searchNode);
    }
  }

  searchTreeByNode(searchTree, searchNode);
  if (!response) response = null;
  return response;
};

module.exports = depthFirstSearcher;
