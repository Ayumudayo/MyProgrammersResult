function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) if (n % i === 0) return false;

    return true;
}

// 수 조합 생성
function genNums(numbers) {
    // 중복 방지용 Set
    const numSet = new Set();
    const length = numbers.length;

    // 사용 추적
    const visited = Array(length).fill(false);
    const path = [];

    const dfs = (path, visited) => {
        if (path.length > 0) {
            numSet.add(parseInt(path.join("")));
        }

        // 조합의 길이가 전체 숫자의 길이를 초과 할 수 없음
        if (path.length === length) return;

        for (let i = 0; i < length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            path.push(numbers[i]);

            dfs(path, visited);

            // 백트래킹
            path.pop();
            visited[i] = false;
        }
    };

    dfs(path, visited);

    return numSet;
}

function solution(numbers) {
    const numSet = genNums(numbers);
    let count = 0;

    // 소수 여부 검사
    numSet.forEach((num) => {
        if (isPrime(num)) count++;
    });

    return count;
}