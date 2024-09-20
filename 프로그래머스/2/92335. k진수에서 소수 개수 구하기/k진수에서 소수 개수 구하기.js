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
    const splited = converted.split('0');
    let cnt = 0;
    
    for (let num of splited) {
        if (num === '') continue;
        if (isPrime(num)) cnt++;
    }
    
    return cnt;
}