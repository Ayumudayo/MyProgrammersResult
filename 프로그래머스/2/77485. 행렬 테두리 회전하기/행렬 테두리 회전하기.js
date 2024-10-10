function solution(rows, columns, queries) {
  let matrix = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1)
  );
    
  let result = [];

  // 회전 처리
  queries.forEach(query => {
    // 좌표값에서 1을 빼 0으로 시작하게 함
    let [x1, y1, x2, y2] = query.map(i => i - 1);

    // 회전 전 빈칸 만들기 [x1][y1]
    let temp = matrix[x1][y1];
    let minValue = temp;

    // 왼쪽 (상 > 하 스왑)
    for (let i = x1; i < x2; i++) {
      matrix[i][y1] = matrix[i + 1][y1];
      minValue = Math.min(minValue, matrix[i][y1]);
    }

    // 아래쪽 (좌 > 우 스왑)
    for (let i = y1; i < y2; i++) {
      matrix[x2][i] = matrix[x2][i + 1];
      minValue = Math.min(minValue, matrix[x2][i]);
    }

    // 오른쪽 (하 > 상 스왑)
    for (let i = x2; i > x1; i--) {
      matrix[i][y2] = matrix[i - 1][y2];
      minValue = Math.min(minValue, matrix[i][y2]);
    }

    // 위쪽 (우 > 좌 스왑)
    for (let i = y2; i > y1; i--) {
      matrix[x1][i] = matrix[x1][i - 1];
      minValue = Math.min(minValue, matrix[x1][i]);
    }

    // 킵 해둔 temp를 빈칸에 넣음
    matrix[x1][y1 + 1] = temp;

    // 회전 사이클마다 최소값 추가
    result.push(minValue);
  });

  return result;
}