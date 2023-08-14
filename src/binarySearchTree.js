import { mergeSort } from "./mergeSort";

export class Tree {
    constructor(array) {
        this.array = array;
        this.root = null;
    }
    buildTree() {
        let sortedArray = mergeSort(this.array)
        let removedDuplicates = [... new Set(sortedArray)]

        this.recursiveBuildTree(sortedArray)



    }

    recursiveBuildTree(array) {
        // if (array.length === 0) return array;
        // else {
            const middleIndex = Math.ceil(0 + array.length)/2
            const root = array[middleIndex]
            const leftHalf = array.slice(0, middleIndex)
            const rightHalf = array.slice(middleIndex + 1) // don't include the root (middle)

            console.log(root)
            console.log(leftHalf)
            console.log(rightHalf)
            // return this.recursiveBuildTree()
        // }
    }
}