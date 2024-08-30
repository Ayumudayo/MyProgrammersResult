function solution(s) {
    let answer = 0;
    let sArr = [...s]
    
    while (sArr.length > 0) {
        let x = sArr[0];
        let xCnt = 0;
        let oCnt = 0;
        let i;
        
        for (i = 0; i < sArr.length; i++) {
            sArr[i] === x ? xCnt++ : oCnt++;            
            if (xCnt === oCnt)
                break;
        }
        
        console.log(sArr.splice(0, i + 1));
        answer++;
    }
    
    return answer;
}