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


    insert(value) {
        function recursiveFunction(node, value) {
            if (value < node.data && node.left == null) {
                const newNode = new Node(value);
                node.left = newNode;

            } else if (value > node.data && node.right == null) {
                const newNode = new Node(value);
                node.right = newNode;

            } else if (value < node.data) {
                return recursiveFunction(node.left, value)

            } else if (value > node.data) {
                return recursiveFunction(node.right, value)

            } else if (value == node.data) {
                console.log("value already in tree, try another value")
                return
            }
        }
        recursiveFunction(this.root, value)
    }

    delete(value) {
        function recursiveFunction(node, value) {
            console.log(node.left)
            // consider at least three cases
            // deleting the leaf node
            if (node.left.data === value && node.left.left === null && node.left.right === null) {
                node.left = null;
            }
            else if (node.right.data === value && node.right.left === null && node.right.right === null) {
                node.right = null;
            }
            // deleting a branch node with one leaf; point the preceding child to the 2nd following child
            else if (node.left.data === value && node.left.left !== null && node.left.left.left === null 
                && node.left.left.right === null && node.left.right === null) {
                    node.left = node.left.left
            }
            else if (node.left.data === value && node.left.right !== null && node.left.right.left === null 
                && node.left.right.right === null && node.left.left === null) {
                    node.left = node.left.right
            }
            else if (node.right.data === value && node.right.left !== null && node.right.left.left === null 
                && node.right.left.right === null && node.right.right === null) {
                    node.right = node.right.left
            }
            else if (node.right.data === value && node.right.right !== null && node.right.right.left === null 
                && node.right.right.right === null && node.right.left === null) {
                    node.right = node.right.right
            }
            // edge case where root is has one leaf (two nodes only in the tree)
            // deleting a branch with both leaves; get the next right, then leftmost i think
            else if (node.data === value && node.left !== null && node.right !== null) {
                if 
            }
            // value isn't there
            else if (value < node.data) {
                return recursiveFunction(node.left, value)
            } else if ( value > node.data) {
                return recursiveFunction(node.right, value)
            }
        }
        recursiveFunction(this.root, value)
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
        return root;
    }
}

function insert(value) {
    function recursiveFunction(node, value) {
        if (value < node.data && node.left == null) {
            const newNode = new Node(value);
            node.left = newNode;
        } else if (value > node.data && node.right == null) {
            const newNode = new Node(value);
            node.right = newNode;
        } else if (value < node.data) {
            return recursiveFunction(node.left)
            // create new node, make it the child of the previous node, and the new root of the next nodes
        } else if (value > node.data) {
            return recursiveFunction(node.right)
        } else if (value == node.data) {
            console.log("value already in tree, try another value")
            return
        }
    }
    recursiveFunction()
}