// 정삼각형
// 이차원 배열에 원소 배열의 길이를 다르게 해 삼각형 처럼 취급
// 방향을 지정해 조건문 분기

function solution(n) {
    let arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));  // 삼각형 모양 이차원 배열 생성
    let curNum = 1;
    let x = -1, y = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) {              // 아래
                x++;
            } else if (i % 3 === 1) {       // 오른쪽
                y++;
            } else if (i % 3 === 2) {       // 위
                x--;
                y--;
            }
            arr[x][y] = curNum++;
        }
    }

    // 배열을 펴서 리턴
    return arr.flat();
}