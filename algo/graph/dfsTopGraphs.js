console.log("dfs top graphs data structure file has been generated")

// Time complexity: O(v + e) -- where v is the # of vertices, & e is the # of edges
// Space complexity is O(v) -- because the visited array, will at most store each vertex (node), if we traverse the entire graph

// algorithm good for:
// -- detecting a cycle
// -- finding a path between two nodes (if exists)

// creating a Node via class Object
class Node {
    constructor (value) {
        this.value = value;
        this.edgesList = [];
    }

    //***methods***

    // method to connect vertices (nodes)
    connect (node) {
        this.edgesList.push(node);
        
    }

    // method to getAdjacentNodes
    getAdjacentNodes() {
        return this.edgesList;
    }

    // method to check if vertices (nodes), are connected?
    isConnected(node){
        return !!this.edgesList.find(edge => edge.value == node.value)
    }

}

/*
          a      e
        /   \  /   \
        b     c     f
         \         /
           \     /
              d

*/

// creating Graph with another class Object

class Graph {
    constructor (nodes) {
        this.nodes = [...nodes]
    }

    // method to add each nodes, to the graph list (array)
     addToGraph (node) {
        this.nodes.push(node)
     }

     // method to topological sort
     topologicalSort() {

        const visited = new Set()
        const topOrdering = []

        for (const node of this.nodes) {
            this.depthFirstSearchTraversal(node, visited, topOrdering)
        }
        console.log(topOrdering.reverse())
     }

     depthFirstSearchTraversal(start, visited, topOrdering) {
        if (visited.has(start)) {
            return
        }

        visited.add(start)
        console.log('Visiting Node', start.value)
        for (const adjacency of start.edgesList) {
            this.depthFirstSearchTraversal(adjacency, visited, topOrdering)
        }

        topOrdering.push(start.value)
        // pop the nodes (start) off stack here
     }
     

}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')


const graph = new Graph([a, b, c, d, e, f])

a.connect(c)
a.connect(b)
b.connect(d)
d.connect(f)
e.connect(f)
e.connect(c)

graph.topologicalSort()