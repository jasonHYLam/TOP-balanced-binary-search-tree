// import { Node, Tree, buildTree } from "./binarySearchTree";
import { Tree } from "./binarySearchTree";
import { prettyPrint } from "./prettyPrint";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


// buildTree(testArray)
let newTree = new Tree(testArray)
// prettyPrint(newTree.root)

newTree.insert(9)
prettyPrint(newTree.root)

console.log('h')
newTree.delete(23)
prettyPrint(newTree.root)
newTree.delete(3)
prettyPrint(newTree.root)