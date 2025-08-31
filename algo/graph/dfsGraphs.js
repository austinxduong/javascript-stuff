console.log("dfs graphs data structure file has been generated")

// Time complexity: O(v + e) -- where v is the # of vertices, & e is the # of edges
// Space complexity is O(v) -- because the visited array, will at most store each vertex (node), if we traverse the entire graph

// algorithm good for:
// -- detecting a cycle
// -- finding a path between two nodes (if exists)

// creating a Node via class Object
class Node {
    constructor(value) {
    this.value = value;
    this.edgesList = [];
    
    }

    //***methods***

    // method to connect vertices (nodes)
    connect(node){
        this.edgesList.push(node);
        node.edgesList.push(this);
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

// creating Graph with another class Object

class Graph {
    constructor(nodes){
        this.nodes = [...nodes]
    }

    // method to add each nodes, to the graph list (array)
     addToGraph(){
        this.nodes.push(node)
     }

     // method to dfs traverse through graph
     depthFirstSearchTraversal(start, end, visited) {

        if (!visited) {
           visited = new Set() 
        }

        // keep traversing deeper into the graph, 
        // until hit leaf node
        // or at end node

        if (start.value === end.value) {
            console.log('Found it!')
            return;
        }
        console.log('Visiting node', start.value)
        visited.add(start)
        for (const adjacency of start.edgesList) {
            if (!visited.has(adjacency)) {
             this.depthFirstSearchTraversal(adjacency, end, visited)
            }
        }

        // final base case
     }

}

const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');
const HKG = new Node('HKG');

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG])

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
SAN.connect(HKG)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MCO.connect(PBI)
MIA.connect(PBI)

graph.depthFirstSearchTraversal(DFW, HKG)
