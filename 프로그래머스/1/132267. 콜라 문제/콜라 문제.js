function trade(a, b, n) {
    if (n < a) 
        return 0;
    
    const newN = Math.floor(n / a) * b;
    return newN + trade(a, b, newN + (n % a));
}

function solution(a, b, n) {    
    return trade(a, b, n);
}