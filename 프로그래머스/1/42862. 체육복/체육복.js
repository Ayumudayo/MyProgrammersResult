// n : 전체 학생의 수
// lost : 필요한 학생
// reserve : 여분이 있는 학생
// return : 최대값

function solution(n, lost, reserve) {
    
    const newL = lost.filter(l => !reserve.includes(l));
    const newR = reserve.filter(r => !lost.includes(r));
    
    let answer = n - newL.length;
    
    newL.sort((a, b) => a - b);
    newR.sort((a, b) => a - b);
    
    for (let i = 0; i < newL.length; i++) {
        for (let j = 0; j < newR.length; j++) {
            if (Math.abs(newL[i] - newR[j]) === 1) {
                answer++;
                newR.splice(j, 1);
                break;
            }
        }
    }
    
    return answer;
}