// 두 테이블 T1, T2가 행렬 (r1, c1), (r2, c2)에 각각 위치하고 있다면, 
// T1, T2 사이의 맨해튼 거리는 |r1 - r2| + |c1 - c2| 입니다

function checkPlace(place) {
    const participants = [];
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            if (place[x][y] === 'P') {
                participants.push([x, y]);
            }
        }
    }

    for (let [x, y] of participants) {
        // 인접한 위치 검사 (맨해튼 거리 1)
        let oneDirection = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dx, dy] of oneDirection) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') {
                    return 0;
                }
            }
        }

        // 맨해튼 거리 2인 위치 검사
        // 직선 방향
        const twoDirections = [[-2, 0], [2, 0], [0, -2], [0, 2]];
        for (let [dx, dy] of twoDirections) {
            const nx = x + dx;
            const ny = y + dy;
            const mx = x + dx / 2;
            const my = y + dy / 2;
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') {
                    if (place[mx][my] !== 'X') {
                        return 0;
                    }
                }
            }
        }

        // 대각선 방향
        const diagonalDirections = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        for (let [dx, dy] of diagonalDirections) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') {
                    if (place[x][ny] !== 'X' || place[nx][y] !== 'X') {
                        return 0;
                    }
                }
            }
        }
    }
    return 1;
}

function solution(places) {
    let answer = [];
    
    for (let place of places)
        answer.push(checkPlace(place));

    return answer;
}
