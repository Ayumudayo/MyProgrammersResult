function dfs(numbers, target, index, currentSum) {
    // numbers를 다 봤으면 타겟과 같은지 체크
    if (index === numbers.length)
        return currentSum === target ? 1 : 0;
    else
        // 일단 끝까지 더하고 빼본다 => 깊이 우선 탐색
        return dfs(numbers, target, index + 1, currentSum + numbers[index]) +   // 더하는 경우
               dfs(numbers, target, index + 1, currentSum - numbers[index]);    // 빼는 경우
}

function solution(numbers, target) {
    return dfs(numbers, target, 0, 0);
}