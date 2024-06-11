#include <iostream>
#include <vector>
#include <unordered_map>
#include <list>
#include <queue>
#include <set>

using namespace std;

class Graph {
public:
    unordered_map<char, list<char>> adjList;

    void addEdge(char u, char v) {
        adjList[u].push_back(v);
        adjList[v].push_back(u);
    }

    void bfs(char startNode) {
        set<char> visited;
        queue<char> q;
        vector<char> result;

        q.push(startNode);
        visited.insert(startNode);

        while (!q.empty()) {
            char node = q.front();
            q.pop();
            result.push_back(node);

            for (char neighbor : adjList[node]) {
                if (visited.find(neighbor) == visited.end()) {
                    q.push(neighbor);
                    visited.insert(neighbor);
                }
            }
        }

        for (char node : result) {
            cout << node << " ";
        }
        cout << endl;
    }
};

int main() {
    Graph g;

    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'D');
    g.addEdge('C', 'E');
    g.addEdge('D', 'E');
    g.addEdge('D', 'F');
    g.addEdge('E', 'F');

    g.bfs('A'); // Output should be: A B C D E F

    return 0;
}
