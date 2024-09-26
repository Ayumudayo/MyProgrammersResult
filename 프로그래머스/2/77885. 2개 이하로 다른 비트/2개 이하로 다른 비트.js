// 연속된 1의 개수를 세는 함수
function countTrail(x) {
    let count = 0;
    while ((x & 1n) === 1n) {
        count += 1;
        x >>= 1n;
    }
    return count;
}

function solution(numbers) {
    // 각 숫자에 대해 f(x)를 계산
    return numbers.map((num) => {
        let x = BigInt(num);
        if (x % 2n === 0n) {    // 짝수인 경우
            return Number(x + 1n);
        } else {    // 홀수인 경우      
            let c = countTrail(x);
            // c가 1이여도 x + 1이 된다.
            let increment = 1n << BigInt(c - 1);
            return Number(x + increment);
        }
    });
}
