import { mergeSort } from "./mergeSort";

class Tree {
    constructor(array) {
        this.array = array;
        this.root = null;
        this.leftChildren = null;
        this.rightChildren = null;
    }
}
    function buildTree() {
        let sortedArray = mergeSort(array)
        let removedDuplicates = [... new Set(sortedArray)]

        recursiveBuildTree(removedDuplicates)
    }

    function recursiveBuildTree(array) {
        if (array.length === 0) return array;
        // else {
            const tree = newTree(array)
            const middleIndex = Math.floor(array.length/2)
            tree.root = array[middleIndex]
            
            const leftHalf = array.slice(0, middleIndex)
            const rightHalf = array.slice(middleIndex + 1) // don't include the root (middle)

            console.log(root)
            recursiveBuildTree(leftHalf)
            console.log(leftHalf)
            recursiveBuildTree(rightHalf)
            console.log(rightHalf)
            return root;
            // not exactly sure what is happening here
        // }
    }