// 노드가 N개인 무방향 그래프
// 노드A에서 나머지 N-1개의 노드에 대해 비용이 K 이하인 개수

function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    const distances = Array(N + 1).fill(Infinity);
    const queue = [];

    // 그래프 생성
    for (const [a, b, c] of road) {
        graph[a].push({ to: b, cost: c });
        graph[b].push({ to: a, cost: c });
    }

    // 시작점 설정
    distances[1] = 0;
    queue.push({ to: 1, cost: 0 });

    // 다익스트라
    while (queue.length > 0) {
        // 비용이 제일 낮은 노드
        queue.sort((a, b) => a.cost - b.cost);
        const { to: current, cost: currentCost } = queue.shift();
    
        // 더 작은 비용이 확인된다는 것은
        // 현재 경로는 더 길다는 뜻
        if (distances[current] < currentCost) continue;

        for (const neighbor of graph[current]) {
            const newCost = distances[current] + neighbor.cost;
            
            // 만약 새 비용이 더 적다면 갱신
            if (newCost < distances[neighbor.to]) {
                distances[neighbor.to] = newCost;
                queue.push({ to: neighbor.to, cost: newCost });
            }
        }
    }

    // K 이하로 도달 가능한 마을의 수 계산
    const answer = distances.filter(distance => distance <= K).length;
    return answer;
}