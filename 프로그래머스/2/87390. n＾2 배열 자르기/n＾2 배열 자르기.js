function solution(n, left, right) {
    let arr = new Array();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(Math.max(i + 1 , j + 1));
        }
    }
    
    return arr.slice(left, right + 1);
}
