function traverseTree(root, treeStructure, sortedCategories) {
    if (root === null) return;
  
    let stack = [root];
    while (stack.length !== 0) {
      const top = stack.pop();
      sortedCategories.push(top);
      const children = treeStructure[top.id];
      if (children && children.length !== 0) {
        children.forEach((child) => stack.push(child));
      }
    }
}
  
function createTree(inputData, treeStructure, rootNodes) {
    if (!inputData || inputData.length === 0) return;
  
    inputData.forEach((input) => {
      // Adding rootNodes to the collection
      if (!input.parent_id) {
        rootNodes.push(input);
      } else {
        if (treeStructure[input.parent_id]) {
          const children = treeStructure[input.parent_id];
          children.push(input);
        } else {
          treeStructure[input.parent_id] = [input];
        }
      }
    });
}
  
function sortCategoriesForInsert(inputJson) {
    const rootNodes = [];
    const treeStructure = {};
    const sortedCategories = [];
    createTree(JSON.parse(inputJson), treeStructure, rootNodes);
    rootNodes.forEach((root) => {
      traverseTree(root, treeStructure, sortedCategories);
    });
    return JSON.stringify(sortedCategories);
}

module.exports = sortCategoriesForInsert;