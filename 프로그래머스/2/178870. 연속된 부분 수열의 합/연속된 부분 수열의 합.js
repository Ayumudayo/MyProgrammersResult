function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let minLength = Infinity;
    let minPos = [];

    while (end <= sequence.length) {
        if (sum < k) {
            if (end === sequence.length) break;
            sum += sequence[end];
            end++;
        } else if (sum > k) {
            sum -= sequence[start];
            start++;
        } else { // sum === k
            if ((end - start) < minLength) {
                minLength = end - start;
                minPos = [start, end - 1];
            }
            sum -= sequence[start];
            start++;
        }
    }

    // 만약 부분 배열이 존재하지 않으면 음수 배열 반환
    return minPos.length > 0 ? minPos : [-1, -1];
}