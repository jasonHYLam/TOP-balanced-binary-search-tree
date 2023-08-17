// import { Node, Tree, buildTree } from "./binarySearchTree";
import { Tree } from "./binarySearchTree";
import { prettyPrint } from "./prettyPrint";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]


// buildTree(testArray)
const newTree = new Tree(testArray)
console.log(newTree)
prettyPrint(newTree.root)