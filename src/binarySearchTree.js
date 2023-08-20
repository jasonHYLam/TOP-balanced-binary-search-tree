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
            // this code requires guard clause: if(node.left), or if(node.right)
            // consider at least 4 cases
            // Case 1: deleting the leaf node
            if (node.left && node.left.data === value && node.left.left === null && node.left.right === null) {
                node.left = null;
            }
            else if (node.right && node.right.data === value && node.right.left === null && node.right.right === null) {
                node.right = null;
            }
            // Case 2: deleting a branch node with one leaf; point the preceding child to the 2nd following child
            else if (node.left && node.left.data === value && node.left.left !== null && node.left.left.left === null 
                && node.left.left.right === null && node.left.right === null) {
                    node.left = node.left.left
            }
            else if (node.left && node.left.data === value && node.left.right !== null && node.left.right.left === null 
                && node.left.right.right === null && node.left.left === null) {
                    node.left = node.left.right
            }
            else if (node.right && node.right.data === value && node.right.left !== null && node.right.left.left === null 
                && node.right.left.right === null && node.right.right === null) {
                    node.right = node.right.left
            }
            else if (node.right && node.right.data === value && node.right.right !== null && node.right.right.left === null 
                && node.right.right.right === null && node.right.left === null) {
                    node.right = node.right.right
            }
            // TODO: edge case where root is has one leaf (two nodes only in the tree)
            // requires checking if node is root, and checking if it only has one leaf

            // Case 3: deleting a branch with both leaves; get the next right, then leftmost i think
            else if (node.data === value && node.left !== null && node.right !== null) {
                let temp = node.right;
                let tempParent = temp;
                while (temp.left !== null) {
                    tempParent = temp;
                    temp = temp.left;
                }
                node.data = temp.data;
                tempParent.left = null;
            }
            // Case 4: console log if the value isn't found
            else if (value > node.data && node.right === null) {
                console.log(`${value} not found, please try again`);
                return;
            }
            else if (value < node.data && node.left === null) {
                console.log(`${value} not found, please try again`);
                return;
            }
            else if (value < node.data) {
                return recursiveFunction(node.left, value)
            } else if ( value > node.data) {
                return recursiveFunction(node.right, value)
            }
        }
        recursiveFunction(this.root, value)
    }

    find(value) {
        function recursiveFunction(node, value) {
            if (node.data === value) {
                console.log(node)
                return node;
            }
            // check if the value exists at leaf or the leaf parents
            else if (value > node.data && node.right === null) {
                console.log(`${value} not found`)
                return
            }
            else if (value < node.data && node.left === null) {
                console.log(`${value} not found`)
                return
            }
            else if (value > node.data) {
                return recursiveFunction(node.right, value);
            }
            else if (value < node.data) {
                return recursiveFunction(node.left, value);
            }
        }
        recursiveFunction(this.root, value)
    }

    levelOrderRecursive(helperFunction) {
        function recursiveFunction(node) {
            let queue = [];
            // There needs to be some sort of queue, I think it needs to be inside the function
            // base case: if the leaf branches are reached?
            if (node.left === null || node.right === null) {
                return;
            }
            else {
                // create a chain, one that continuously adds and deletes nodes
                queue.push(node)
                helperFunction(node)
                queue.shift()
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)

                // also traverse down the chain
                // go left? go right?
                return recursiveFunction()
                // do i need to have recurisveFunction return to the queue?
            }
            //recursive
            // may have to set root, and get the children
            // add the value to a queue, take it out, and then add the children to a queue?
        }
    }

    levelOrderIterative(helperFunction) {
        let queue = []
        queue.push(this.root)
        while (queue.length !== 0) {
            helperFunction(queue[0])
            if (queue[0].left) queue.push(queue[0].left)
            if (queue[0].right) queue.push(queue[0].right)
            queue.shift()
        }
    }

    inOrder(helperFunction) {
        if (helperFunction) {
            function recursiveFunction(node) {
                helperFunction(node)
                if (node.left === null && node.right === null) return // this only returns the first two levels
                else {
                    if (node.left) {
                        recursiveFunction(node.left)
                    }
                    if (node.right) {
                        recursiveFunction(node.right)
                    }
                }
            }
            recursiveFunction(this.root)
        } else {
            function recursiveFunction(node) {
                if (node.left === null && node.right === null) {
                    // console.log(node.data)
                    return [node.data];
                }
                else {
                    // console.log(node.data)
                    let recursiveValue = [node.data];
                    if (node.left) {
                        recursiveValue = recursiveValue.concat(recursiveFunction(node.left))
                    }
                    if (node.right) {
                        recursiveValue = recursiveValue.concat(recursiveFunction(node.right))
                    }
                    console.log(recursiveValue)
                    return recursiveValue;
                }
            }
            console.log(
                recursiveFunction(this.root)
            )
        }
    }

    // do the same for preOrder and postOrder

    // height; find longest length between this node, and leaf node. how? do i need to use find?
    // height(node) {
    //     let counter = 0;
    //     while ()

    // }
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