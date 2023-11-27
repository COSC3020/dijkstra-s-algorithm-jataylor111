const fs = require('fs');
eval(fs.readFileSync('code.js')+'');
const assert = require('assert');

    let graph = {
        'A': {'B': 1, 'C': 4},
        'B': {'A': 1, 'C': 2, 'D': 5},
        'C': {'A': 4, 'B': 2, 'D': 1},
        'D': {'B': 5, 'C': 1}
    };

    let distances = dijkstra(graph, 'A');
    assert.deepStrictEqual(distances, {A: 0, B: 1, C: 3, D: 4});

    distances = dijkstra(graph, 'B');
    assert.deepStrictEqual(distances, {A: 1, B: 0, C: 2, D: 3});

    distances = dijkstra(graph, 'C');
    assert.deepStrictEqual(distances, {A: 3, B: 2, C: 0, D: 1});

    distances = dijkstra(graph, 'D');
    assert.deepStrictEqual(distances, {A: 4, B: 3, C: 1, D: 0});

