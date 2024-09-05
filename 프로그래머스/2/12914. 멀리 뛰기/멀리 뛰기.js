function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let prev1 = 2;
    let prev2 = 1;
    let cur = 0;
    
    for (let i = 3; i <= n; i++) {
        cur = (prev1 + prev2) % 1234567;
        prev2 = prev1;
        prev1 = cur;
    }
    
    return cur;
}