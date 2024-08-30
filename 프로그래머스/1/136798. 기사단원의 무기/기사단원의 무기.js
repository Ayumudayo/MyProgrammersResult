function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count += (j * j === i) ? 1 : 2;
            }
            if (count > limit) {
                count = power;
                break;
            }
        }
        answer += count;
    }
    
    return answer;
}