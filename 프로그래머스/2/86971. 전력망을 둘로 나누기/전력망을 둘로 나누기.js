function solution(n, wires) {
    // 인접 리스트 생성
    // 노드가 연결돼있는지 확인해야 함
    // 문제에서 노드가 1번부터 시작하므로 0은 사용하지 않음
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    // 서브트리의 크기를 저장할 배열
    let subLen = Array(n + 1).fill(0);

    // DFS를 통해 각 노드의 서브트리 크기를 계산
    function dfs(node, parent) {
        subLen[node] = 1; // 자신을 포함
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                // 해당 노드의 서브트리 크기 저장
                subLen[node] += dfs(neighbor, node);
            }
        }
        return subLen[node];
    }

    // 루트 노드(1번 노드)부터 시작하여 서브트리 크기 계산
    dfs(1, -1);

    let minDiff = n;

    // 모든 전선을 하나씩 끊어보며 크기 차이를 계산
    for (const [v1, v2] of wires) {
        // 비교를 위해 2개 부분으로 나눈다
        let part1 = subLen[v1] < subLen[v2] ? subLen[v1] : subLen[v2];
        let part2 = n - part1;
        let diff = Math.abs(part1 - part2);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}
