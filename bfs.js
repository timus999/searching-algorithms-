const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'E', 'F'],
    E: ['C', 'D', 'F'],
    F: ['D', 'E']
  };

function bfs ( graph, startNode) {
    let visited = new Set();
    let queue = [startNode];
    let result = [];

    while( queue.length > 0){
        let node = queue.shift();

        if ( !visited.has(node)){
            visited.add(node);
            result.push(node);

            for(let neighbour of graph[node]){
                if ( !visited.has(neighbour)){
                    queue.push(neighbour);
                }
            }
        }
    }
    return result;
}

console.log(bfs(graph, "A"));
