import { mergeSort } from "./mergeSort";

class Tree {
    constructor(array) {
        this.array = array;
        this.root = null;
        this.leftChildren = null;
        this.rightChildren = null;
    }
}
export function buildTree(array) {
        let sortedArray = mergeSort(array)
        let removedDuplicates = [... new Set(sortedArray)]

        console.log(removedDuplicates)
        recursiveBuildTree(removedDuplicates)
    }

function recursiveBuildTree(array) {
    if (array.length === 0) return array;
    // else {
        const tree = new Tree(array)
        const middleIndex = Math.floor(array.length/2)
        tree.root = array[middleIndex]
            
        tree.leftChildren = tree.array.slice(0, middleIndex)
        tree.rightChildren = tree.array.slice(middleIndex + 1)

        console.log(tree.root)
        recursiveBuildTree(tree.leftChildren)
        recursiveBuildTree(tree.rightChildren)
        return tree.root;
}