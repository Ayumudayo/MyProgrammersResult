// k진법으로 변환
// 윈도우를 옮겨가며 소수 확인, 0은 포함하지 않음
// 판별 후 윈도우 시작지점 이동

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 5; i <= sqrt; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

function solution(n, k) {
    const converted = n.toString(k);
    let cnt = 0;
    let left = 0;
    let right = 0;
    const len = converted.length;
    
    while(right <= converted.length) {
        // 윈도우의 끝이거나 현재 right가 0일 경우
        if(right === len || converted[right] === '0') {
            if(isPrime(converted.slice(left, right))){
                cnt++;
            }
            right++;
            left = right;
        }
        else {
            right++;
        }
    }
    
    return cnt;
}