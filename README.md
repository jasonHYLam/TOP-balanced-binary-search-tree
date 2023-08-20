# TOP-balanced-binary-search-tree

My approach mainly required recursion rather than iteration.

## Project Requirements:

- Contains Node class which has an attribute for the data it stores, as well as left and right children.

- Contains Tree class which accepts an array when initialised. The Tree class has a root attribute which whichs the return value of buildTree().

- buildTree() takes an array of data, and turns it into a balanced binary tree full of Node objects. This array is sorted and duplicated removed first. It returns the level-0 root node. 

- Contains a custom function called prettyPrint() which will console.log() the tree.

- insert() accepts a value to insert. If the value already exists in the tree, then console.log() a message that the value already exists, and return.

- delete() accepts a value to delete. If the value doesn't exist, then console.log() a message that the value doesn't exist, and return. This function considers different cases, including when the value to delete is in a leaf node, when the value to delete is in a node with only one leaf node, and when the value to delete is in a node with both children. 

- find() accepts a value and returns the node with the given value. 

- levelOrder() traverses the tree in level order, using iteration.

- inOrderIteratively() traverses the tree by depth first. This uses iteration rather than recursion.

## What I've Learned

- In most of these functions, it was required to check the parent of the node, rather than the node itself. This is due to the nature of the tree structure, and how Nodes can only be set to null by setting on Node.left and Node.right. Usually, I checked if the parent Node's children's children were null, eg. Node.left.left === null or Node.right.left === null.

- The 'beginning' of a linked data structure (such as a tree) comes first, due to the nature of chained returns.

- Guard clauses are required for checking whether a value exists for deletion functions. The guard conditions prevent errors when the node children (in this case, node.left or node.right) aren't found.

- Array.concat() does not modify an existing array. To modify an existing array with .concat(), it must be reassigned, like so: array = array.concat(array2)
