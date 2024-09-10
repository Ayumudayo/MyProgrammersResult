function solution(n, left, right) {
    let arr = new Array();
    const lPos = [left / n, left % n];
    const rPos = [right / n, right % n];
    
    for (let k = left; k < right + 1; k++) {
        let i = Math.floor(k / n);
        let j = k % n;
        arr.push(Math.max(i + 1, j + 1));
}

    
    return arr;
}
