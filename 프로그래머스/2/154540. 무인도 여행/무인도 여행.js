function solution(maps) {
  function dfs(x, y) {
    if (x < 0 || x >= maps.length || y < 0 || y >= maps[0].length || maps[x][y] === 'X') {
      return 0;
    }

    // 현재 위치의 값을 저장하고, 방문 처리를 위해 'X'로 변경
    let food = parseInt(maps[x][y]);
    maps[x][y] = 'X';

    // 상, 하, 좌, 우 탐색
    food += dfs(x + 1, y);
    food += dfs(x - 1, y);
    food += dfs(x, y + 1);
    food += dfs(x, y - 1);

    return food;
  }

  let answer = [];
  maps = maps.map(row => row.split('')); // 문자열 배열을 2차원 리스트로 변환

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== 'X') {
        // 섬을 발견하면 DFS를 이용해 해당 섬의 식량을 계산
        let days = dfs(i, j);
        answer.push(days);
      }
    }
  }

  if (answer.length === 0) {
    return [-1];
  }

  return answer.sort((a, b) => a - b);
}