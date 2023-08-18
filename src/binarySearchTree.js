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
            console.log(value)
            console.log(node.data)
            // console.log('x')
            // consider at least three cases
            // deleting the leaf node
            // if it exists, search for it, else return 
            // shit i can't figure this out
            if (node.left && node.left.data === value && node.left.left === null && node.left.right === null) {
                node.left = null;
                console.log('a')
            }
            else if (node.right && node.right.data === value && node.right.left === null && node.right.right === null) {
                node.right = null;
                console.log('b')
            }
            // deleting a branch node with one leaf; point the preceding child to the 2nd following child
            else if (node.left && node.left.data === value && node.left.left !== null && node.left.left.left === null 
                && node.left.left.right === null && node.left.right === null) {
                    node.left = node.left.left
                console.log('c')
            }
            else if (node.left && node.left.data === value && node.left.right !== null && node.left.right.left === null 
                && node.left.right.right === null && node.left.left === null) {
                    node.left = node.left.right
                console.log('d')
            }
            else if (node.right && node.right.data === value && node.right.left !== null && node.right.left.left === null 
                && node.right.left.right === null && node.right.right === null) {
                    node.right = node.right.left
                console.log('e')
            }
            else if (node.right && node.right.data === value && node.right.right !== null && node.right.right.left === null 
                && node.right.right.right === null && node.right.left === null) {
                    node.right = node.right.right
                console.log('f')
            }
            // TODO: edge case where root is has one leaf (two nodes only in the tree)
            // ... 

            // deleting a branch with both leaves; get the next right, then leftmost i think
            else if (node.data === value && node.left !== null && node.right !== null) {
                let temp = node.right;
                let tempParent = temp;
                while (temp.left !== null) {
                    tempParent = temp;
                    temp = temp.left;
                }
                node.data = temp.data;
                tempParent.left = null;
                console.log('g')
            }
            // value isn't there
            // else if (value > node.data && node.right === null || value < node.data && node.left === null) {
            //     console.log('value not found');
            //     console.log('h')
            //     return;
            // }
            else if (value > node.data && node.right === null) { // if value doesn't exist, 
                console.log('big value not found');
                console.log('h')
                return;
            }
            else if (value < node.data && node.left === null) {
                console.log('small value not found');
                console.log('h')
                return;
            }
            else if (value < node.data) {
                console.log('asdf')
                console.log(node.left)
                return recursiveFunction(node.left, value)
            } else if ( value > node.data) {
                console.log('vvvvv')
                console.log(node.right)
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