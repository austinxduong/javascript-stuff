console.log("disjoint set graph data structure file has been generated")

// useful for keeping track of groups of elements or components of a graph
// a set === disjoint, if there are no connections between the components

// methods for disjoint sets
// find method -- to find the parent node, aka which component it belongs to 
// union === take two disjoint sets, and join them so that they are part of the same component
    // union method()
        // first check to see that two nodes arent already in the same component(aka have the same parent)
        // then, if they are in seperate components, make the parent of the second node, the same parent as the first node
        // lastly, track how many nodes are children of the parent node. add the initial value of the second node, to the value at the parent node



/*
                                        // union(1, 2)

0   1   2      ////////////////////      0   1----2

[-1, -1, -1]   ////////////////////      [-1, -2, 1]

*/


// [-1, -1, -1, -1, -1] -- denotes each node, is its own parent; its the only node, in its own component


/*

1---2----3
|     \  |
|      \ |
0        4

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

[-1, -1, -1, -1, -1]

union(0, 1) --->
    find(0) --- 0 (is its own parent)
    find(1) --- 1 (is also its own parent)

[-2, 0, -1, -1, -1] // denotes; 0th index, is a parent with a component that has 2 nodes in it, and the 1st index has a parent of 0

1   2    3
|       
|       
0        4

*/

/*

[-2, 0, -1, -1, -1]

union(2, 3) --->

    find(2) --- (is its own parent)
    find(3) --- (is also its own parent)

[-2, 0, -2, 2, -1]

1   2----3
|       
|       
0        4

*/


/*

[-2, 0, -2, 2, -1]

union(1, 2) --->
    find(1) --- has a parent of 0
    find(2) --- is its own parent

[-4, 0, 0, 2, -1]

1---2----3
|       
|       
0        4

*/

/*

[-2, 0, 0, 2, -1]

union(2, 4) --->
    find(2) --- 0 is the parent
    find(4) --- is its own parent

[-5, 0, 0, 2, 0]

1---2----3
|    \  
|      \ 
0        4

*/



/*

[-5, 0, 0, 2, 0]

union(3, 4) --->
    find(3) --- 0 is the parent
    find(4) --- 0 is the parent

    ***** cycle detected *****

[-6, 0, 0, 0, 0]

1---2----3
|    \  
|      \ 
0        4

*/


/*

you are given a network of nodes as a graph. some nodes are initially infected by Malware.
the malware will spread from the initially infected nodes to all the nodes it is connected to,
and it will continue to spread across the network accordingly. we have the oppurtunity to remove
exactly one node, from the initially infected list which will remove it and all its connections. 
return the node that if removed, will minimize the number of nodes ultimately infected in this attack.



*/


class DSU {
    constructor(size){
        this.components = Array(size).fill(-1)
    }

    // methods
    // find the parent of the node
    find(node){
        if(this.components[node] < 0) {
            return node
        }
        return this.find(this.components[node])
    }

    union(node1, node2){
        const parentNode1 = this.find(node1)
        const parentNode2 = this.find(node2)
        if (parentNode1 !== parentNode2) {
            const sizeOfNode2Component = this.components[parentNode2]
            this.components[parentNode1] += sizeOfNode2Component
            this.components[parentNode2] = parentNode1
        }
    }
}


const testing = new DSU(10)

console.log(testing.components)
console.log(testing.find(5))

testing.union(2, 3)
console.log(testing.components)
console.log(testing.find(3))

testing.union(8, 9)
console.log(testing.components)

testing.union(8, 3)
console.log(testing.components)

console.log(testing.find(3))

// initially infected nodes: [1, 2]