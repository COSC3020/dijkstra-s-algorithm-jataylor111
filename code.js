function dijkstra(graph, sourceNode) {
    let unvisited = new Set(Object.keys(graph));
    let distances = {};
    for (let node of unvisited) {
        distances[node] = Infinity;
    }
    distances[sourceNode] = 0;

    while (unvisited.size > 0) {
        let currentNode = Array.from(unvisited).reduce((a, b) => distances[a] < distances[b] ? a : b);
        unvisited.delete(currentNode);

        for (let neighbor in graph[currentNode]) {
            let tentativeDistance = distances[currentNode] + graph[currentNode][neighbor];
            if (tentativeDistance < distances[neighbor]) {
                distances[neighbor] = tentativeDistance;
            }
        }
    }

    return distances;
}
