// 합을 비교하며 같아질 때 까지 돌림
// 상한을 초과하게 되면 불가능으로 판단
// (q1.length + q2.length) * 2나, q1.length * 2(또는 3) 이 합리적

function solution(q1, q2) {
    let sum1 = q1.reduce((sum, cur) => sum + cur, 0);
    let sum2 = q2.reduce((sum, cur) => sum + cur, 0);
    const target = (sum1 + sum2) / 2;

    // 합이 홀수면 불가
    if ((sum1 + sum2) % 2 !== 0) return -1;

    // 합이 짝수고 한쪽이 타겟과 같으면 0 리턴
    if (target === sum1) return 0;

    let cnt = 0;
    let i = 0, j = 0;
    const qLen1 = q1.length;
    // const cycleLimit = (qLen1 + q2.length) * 2;  // 보다 엄격한 상한선
    const cycleLimit = qLen1 * 3;   // qLen1 * 2는 케이스1을 통과할 수 없음
    const mergedQ = q1.concat(q2);

    while (cnt <= cycleLimit) {
        if (sum1 === target) return cnt;

        if (sum1 > target) {
            // q1에서 빼서 q2로
            if (i >= mergedQ.length) break;
            const value = mergedQ[i++];
            sum1 -= value;
            sum2 += value;
            cnt++;
        } else {
            // q2에서 빼서 q1으로
            if (j >= mergedQ.length) break;
            const value = mergedQ[qLen1 + j++];
            sum1 += value;
            sum2 -= value;
            cnt++;
        }
    }

    return -1;
}