console.log("binary tree, constructor style file has been generated")

// depth first search traversal
// iterate deep through the tree first, then iterates across

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


 /*           a
            /  \
           b    c
          / \    \
         d   e    f
*/

// store each node in a stack data structure (LIFO, last in first out)


/*
--- algorithm implementation
1. First check to see if the stack is empty
2. If not empty, pop (remove) the node, and add the nodes value, into values list
3. Check if the root node, has children
4. If current root node has existing children node (leaf), push the node value into the stack
5. Continue iterating until the stack is empty, and all node values are in the list

n = # of nodes
Time Complexity: O(n)
Space Complexity: O(n)
*/

////////////////////////////////////////////////////////////////////////////////////////////////

const depthFirstValues = (root) => {

    if (root === null)
        return [];
    
    const result = [];
    const stack = [ root ];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);
        result.push(current.val)

        if (current.right)
            stack.push(current.right);
        if (current.left)
            stack.push(current.left);
    };
    return result;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a)