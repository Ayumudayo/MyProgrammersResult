function dfs(k, dungeons, visited, count) {
    let maxCount = count;

    for (let i = 0; i < dungeons.length; i++) {
        // 방문하지 않았고 최소 피로도 만족 확인
        if (!visited[i] && k >= dungeons[i][0]) {
            visited[i] = true;
            
            // 피로도 소모 후 다음 재귀로
            let currentCount = dfs(k - dungeons[i][1], dungeons, visited, count + 1);
            maxCount = Math.max(maxCount, currentCount);
            visited[i] = false; // 백트래킹
        }
    }

    return maxCount;
}

function solution(k, dungeons) {
    return dfs(k, dungeons, [], 0);
}