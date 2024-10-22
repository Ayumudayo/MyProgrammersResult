/**
* 원점 포함
*/

function solution(k, d) {
    let count = 0;
    
    // x를 0부터 d까지 k 단위로 순회
    for (let x = 0; x <= d; x += k) {
        // y의 최대값을 계산        
        let yMax = Math.floor(Math.sqrt(d * d - x * x) / k) * k;
        
        // y가 0부터 yMax까지 k 단위로 증가하는 경우의 수를 더함
        count += (yMax / k) + 1;
    }
    
    return count;
}