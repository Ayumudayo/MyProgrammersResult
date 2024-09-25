function solution(topping) {
    const n = topping.length;
    const lTopCnt = new Array(n).fill(0);
    const rTopCnt = new Array(n).fill(0);

    const lSet = new Set();
    const rSet = new Set();

    let topCnt = 0;

    // 왼쪽에서 오른쪽으로 순회하며 고유 토핑 개수 기록
    for (let i = 0; i < n; i++) {
        const top = topping[i];
        if (!lSet.has(top)) {
            topCnt++;
            lSet.add(top);
        }
        lTopCnt[i] = topCnt;
    }

    topCnt = 0;

    // 오른쪽에서 왼쪽으로 순회하며 고유 토핑 개수 기록
    for (let i = n - 1; i >= 0; i--) {
        const top = topping[i];
        if (!rSet.has(top)) {
            topCnt++;
            rSet.add(top);
        }
        rTopCnt[i] = topCnt;
    }

    // 분할 가능한 지점 찾기
    let result = 0;
    for (let i = 0; i < n - 1; i++) {
        if (lTopCnt[i] === rTopCnt[i + 1]) {
            result++;
        }
    }

    return result;
}