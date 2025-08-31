console.log("graph data structure file has been generated")

/*
(find adjacent nodes) Time complexity to find adjacent nodes --> O(e) where is is the number of edges
(is connected? return boolean) Time complexity to check if two nodes are connected --> O(e)
Space complexity --> O(v + e) where v is the # of vertices & e is the number of edges

*/

// (nodes) Vertex List + (lines) Edge List 


/*
      A --- B
      |    /
      |  C
      | / \
      D --- E

*/

const vertices = ['A', 'B', 'C', 'D', 'E'] // nodes
const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
] // lines


// find Adjacent nodes
// where are all if its nearest neighbors?
const  findAdjacentNodes = function(node) {
    // Loop through edges array
    // Is my node in the connection?
    // If yes, push the other node in pair, into adjacentNodes array
    // If no, keep looping

    const adjacentNodes = []

    for (let edge of edges){
        // edge = ['A', 'B']
        const nodeIndex = edge.indexOf(node)
        if (nodeIndex > -1) {
            const adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]
            adjacentNodes.push(adjacentNode)
        }
    }
    return adjacentNodes
}

// console.log(findAdjacentNodes('A')) // should return ['B', 'D']
// console.log(findAdjacentNodes('C')) // should return ['D', 'E']


// is Connected?

const isConnected = function(node1, node2){
    return edges.some((edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
    })
}

// console.log(isConnected('C', 'B')) // should return true
// console.log(isConnected('A', 'E')) // should return false


// Adjacency Matrix


/*
      A --- B
      |    /
      |  C
      | / \
      D --- E

*/

// Time complexity to find adjacent nodes --> O(v) where v is the # of vertices
// Time complexity to check if two nodes are connected --> O(1) // 1 operation of evaluating each index of each sub array for a truthy/falsy
// Space complexity --> O(v^2)
const verticesN = ['A', 'B', 'C', 'D', 'E']

const vertexIdxs = {
    'A' : 0,
    'B' : 1,
    'C' : 2,
    'D' : 3,
    'E' : 4
}

const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
]

// findAdjacencies

const findAdjacencies = function (node) {
     const adjacentNodes = []

    for (let i = 0; i < verticesN.length; i++) {
        let nodeVertex = vertexIdxs[node]
        if (adjacencyMatrix[nodeVertex][i] === 1) {
            adjacentNodes.push(verticesN[i])
        }

    }
     // get the row in the matrix
     // loop through the row
     // if there is 1, push that node
     // otherwise skip

     return adjacentNodes
}

console.log(findAdjacencies('A')) // should return ['B', 'D']
console.log(findAdjacencies('C')) // should return ['B', 'D', 'E']
console.log(findAdjacencies('E')) // should return ['C', 'D']


// isConnected?
const isConnectedM = function (node1, node2) {
    const nodeIdx1 = vertexIdxs[node1]
    const nodeIdx2 = vertexIdxs[node2]
    return !!adjacencyMatrix[nodeIdx1][nodeIdx2]
}

console.log(isConnectedM('A', 'E')) // should return false
console.log(isConnectedM('A', 'B')) // should return true
console.log(isConnected('B', 'C')) // should return true
console.log(isConnected('E', 'B')) // should return false

// Adjacency List

// for every node, store a list of what nodes its connected to
// Time complexity to find adjacent nodes --> O(1)
// Time complexity to check if two nodes are connected --> O(logv) if each adjacent row is sorted
// Space complexity --> O(e)

const verticesL = ['a', 'b', 'c', 'd', 'e']

const adjacecy_list = [
    ['b', 'd'],
    ['a', 'c'],
    ['b', 'd', 'e'],
    ['a', 'c', 'e'],
    ['c', 'd']
,]

/*
      A --- B
      |    /
      |  C
      | / \
      D --- E

*/

class Node {
    constructor(value) {
        this.value = value;
        this.edgesList = []
    }

    // method to add node, to the edges list
    connect(node) {
        this.edgesList.push(node)
        node.edgesList.push(this)
    }
    
    // method to return adjacentnodes
    getAdjacentNodes() {
        return this.edgesList.map(edge => edge.value)
    }

    // method to return boolean, if the connected node exist in edgesList
    isConnected(node) {
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > - 1
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes]
    }

    // add to Graph method
    addToGraph(node) {
        this.nodes.push(node)
    }
}

const nodeA = new Node('A')
const nodeB= new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeD)
nodeC.connect(nodeE)
nodeD.connect(nodeE)


// for (let node of graph.nodes) {
//     console.log(`Node ${node.value}`)
//     for (let connectedNode of node.edgesList) {
//         console.log(`Node ${node.value} is connected to ${connectedNode.value}`)
//     }
// }


console.log(nodeC.getAdjacentNodes())

console.log(nodeA.isConnected(nodeB)) // should return true
console.log(nodeB.isConnected(nodeD)) // should return false
console.log(nodeD.isConnected(nodeA)) // should return false


