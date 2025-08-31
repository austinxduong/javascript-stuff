console.log("breadth first search file has been generated")
// flows across left to right from each node in the tree
// does not have a loop in tree
// tree does not have to look like a tree, it just needs a root node
// add to the back, remove from front

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const a = new Node("a")
// const b = new Node("b")
// const c = new Node("c")
// const d = new Node("d")
// const e = new Node("e")
// const f = new Node("f")

/*
      a
    /  \
   b    c
 /  \    \
d    e    f

*/

// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.right = f

const breadthFirstPrint = (root) => {
    const queue = [ root ]
    while(queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val);
        if(curr.left !== null) { // preimptive check if the node removed from the q, has children, if so also push left children to back of q
            queue.push(curr.left);
            }
        if(curr.right !== null) {
            queue.push(curr.right) // same thing but for right child of the node
        }
    }
};

// breadthFirstPrint(a)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// write a function bfs(root, target), that takes in the root of a binary tree, and a target value as arguments.
// the function should return a boolean indicating whether or not the tree contains the target value.


const bfs = (root, target) => {
    const queue = [ root ]
    while(queue.length > 0) {
        const curr = queue.shift();
        if(curr.val === target){
            return true
        }
        if(curr.left !== null) { 
            queue.push(curr.left);
            }
        if(curr.right !== null) {
            queue.push(curr.right) 
        }
    }
    return false;
};

// console.log(bfs(a, "e")) // true
// console.log(bfs(a, "z")) // false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// write a function sumTree(root), root as argument, that sums the total number of nodes within tree. vales are integers

const bfs2 = (root) => {
    const queue = [ root ]
    let sum = 0
    while (queue.length > 0) {
        const curr = queue.shift();
        sum += curr.val
        if(curr.left !== null) { 
            queue.push(curr.left)
            }
        if(curr.right !== null) {
            queue.push(curr.right)
        }
    }
    return sum;
};

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(bfs2(a))

// time complexity = 0(n)
// n = nodes
// n leaves the tree only one time as function iterates