import { mergeSort } from "./mergeSort";

import { prettyPrint } from "./prettyPrint";

class Node {
    constructor(value) {
        this.data= value;
        this.left = null;
        this.right = null;
    }
}
export class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
}

function buildTree(array) {
        let sortedArray = mergeSort(array)
        let removedDuplicates = [... new Set(sortedArray)]
        return recursiveBuildTree(removedDuplicates)
}

function recursiveBuildTree(array) {
    if (array.length === 0) {
        return null; // what do i need to return? array? node?
    } else {
        const middleIndex = Math.floor(array.length/2)
        const root = new Node(array[middleIndex])

        root.left = recursiveBuildTree(array.slice(0, middleIndex))
        root.right = recursiveBuildTree(array.slice(middleIndex + 1))
        // console.log(root)
        return root;
    }

}