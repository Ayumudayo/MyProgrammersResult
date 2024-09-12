function isSubset(A, B, countB) {
    // 사이즈가 작으면 map보다 단순 객체가 더 효율적일 수 있다
    const countA = {};

    // 구간 카운팅
    for (const item of A) {
        countA[item] = (countA[item] || 0) + 1;
    }

    // B(want)의 원소로 키 기반 비교
    for (let i = 0; i < B.length; i++) {
        const item = B[i];
        if (!countA[item] || countA[item] < countB[i]) {
            return false;
        }
    }

    return true;
}

function solution(want, number, discount) {
    let count = 0;

    // 슬라이딩 윈도우
    for (let i = 0; i <= discount.length - 10; i++) {
        const currentSlice = discount.slice(i, i + 10);
        if (isSubset(currentSlice, want, number)) {
            count++;
        }
    }
    return count;
}