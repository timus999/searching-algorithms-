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
    let stack = [startNode];
    let result = [];

    while( stack.length > 0){
        let node = stack.pop();

        if ( !visited.has(node)){
            visited.add(node);
            result.push(node);

            for(let neighbour of graph[node]){
                if ( !visited.has(neighbour)){
                    stack.push(neighbour);
                }
            }
        }
    }
    return result;
}

console.log(bfs(graph, "A"));
