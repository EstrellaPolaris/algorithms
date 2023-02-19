/*
Does not support element access by index.
Elements of the graph can be scattered in memory, since they are linked by links.
Do not require contiguous memory allocation.
*/

class Graph {
    constructor() {
        this.data = {};
    }
		
	// Adds a vertex
    // If the vertex already exists, return
    addVertex(vertex) {
        if (this.data[vertex]) {
            return;
        }

        this.data[vertex] = [];
    }
		
	// Deletes a vertex
    removeVertex(vertex) {
      if (!this.data[vertex]) {
            return;
        }

        while (this.data[vertex].length) {
            this.removeEdge(vertex, this.data[vertex][0]);
        }

        delete this.data[vertex];
    }
		
	// Adds an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.data[vertex1] || !this.data[vertex2]) {
            return;
        }

		if (vertex1 === vertex2) {
            return;
        }

        if (this.data[vertex1].indexOf(vertex2) === -1) {
            this.data[vertex1].push(vertex2);
        }

        if (this.data[vertex2].indexOf(vertex1) === -1) {
            this.data[vertex2].push(vertex1);
        }
    }
		
	// Removes the edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (!this.data[vertex1] || !this.data[vertex2]) {
            return;
        }

        const i1 = this.data[vertex1].indexOf(vertex2);

        if (i1 > -1) {
            this.data[vertex1].splice(i1, 1);
        }

        const i2 = this.data[vertex2].indexOf(vertex1);

        if (i2 > -1) {
            this.data[vertex2].splice(i2, 1);
        }
    }
}

// example
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

console.log(graph.data);

/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */
