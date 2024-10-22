/**
* 원점 포함
*/

function solution(k, d) {
    let count = 0;
    const dSquared = d * d;

    // x를 0부터 d까지 k 단위로 순회
    for (let x = 0; x <= d; x += k) {
        // yMax^2 <= d^2 - x^2
        const yMaxSquared = dSquared - (x * x);
        if (yMaxSquared < 0) continue; // 불필요한 계산 방지

        // y의 최대값을 k 단위로 조정
        const yMax = Math.floor(Math.sqrt(yMaxSquared) / k) * k;

        // y가 0부터 yMax까지 k 단위로 증가하는 경우의 수를 더함
        count += (yMax / k) + 1;
    }

    return count;
}
