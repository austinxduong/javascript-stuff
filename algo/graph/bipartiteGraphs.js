console.log("bipartite graph data structure file has been generated")

// a graph whose vertices can be divided into two disjoint, and independent sets such that every edge connects a vertex in the first set
// to the one in the second set

// legal coloring for bipartite graphs, means neighboring nodes do not share same color
// if legal coloring can coexist in the graph, the graph is bipartite and two independent sets can coexist, vice versa

// dfs (data structure) each node, and alternate colors for each node until end of node (leaf node), or until it become illegal coloring

class Node {
    constructor(value) {
        this.color = null;
        this.value = value
        this.edgesList = []
    }

    connect(node) {
        this.edgesList.push(node)
        node.edgesList.push(this)
    }

    getAdjacentNodes() {
        return this.edgesList
    }

    isConnected(node){
        return !!this.edgesList.find(edge => edge.value === node.value)
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes]
    }

    addToGraph(node) {
        this.nodes.push(node)
        node.edgesList.push(this)
    }
    
    isBipartiteGraph(){
        const visited = new Set()
        for (const node of this.nodes) {
            if(!visited.has(node)) {
                if (this.assignLegalColoring(node, visited)) {
                    console.log('graph is Bipartite')
                    const redTeam = this.nodes.filter(node => node.color === 'red')
                    const blueTeam = this.nodes.filter(node => node.color === 'blue')
                    console.log(redTeam.map(e => e.value))
                    console.log(blueTeam.map(e => e.value))
                } else {
                    console.log('graph is NOT Bipartite')
                }
            }
        }
    }

    assignLegalColoring(start, visited) {
        // if(visited.has(start)) return



        console.log(`Visiting node ${start.value}`)
        visited.add(start)

        if(!start.color) {
            start.color = 'red'
        }
        
        for(const adjacency of start.edgesList) {
            // assign colors
            if (!visited.has(adjacency)) {
                adjacency.color = start.color === 'red' ? 'blue' : 'red'
                console.log(` Assigned color ${adjacency.color} to ${adjacency.value}`)
                if(!this.assignLegalColoring(adjacency, visited)){
                    return false;
                }
            } else {
                console.log(`Resvisiting node ${adjacency.value}`)
                if(start.color === adjacency.color) {
                    return false
                }
            }
           
        }

        return true
    }
}

const Jack = new Node('Jack')
const Emily = new Node('Emily')
const Lucy = new Node('Lucy')
const David = new Node('David')
const Brian = new Node('Brian')
const Chris = new Node('Chris')
const Jose = new Node('Jose')
const Paul = new Node('Paul')

const graph = new Graph([Jack, Emily, Lucy, David, Brian, Chris, Jose, Paul])

David.connect(Lucy)
David.connect(Jose)
David.connect(Chris)
Lucy.connect(Brian)
Lucy.connect(Emily)
Emily.connect(Jack)
Jose.connect(Paul)
Paul.connect(Chris)
Chris.connect(Brian)
Brian.connect(Jack)
// Jose.connect(Chris)

graph.isBipartiteGraph()