function solution(storey) {
    let answer = 0;
    
    while (storey !== 0) {
        let current = storey % 10; // 현재 자릿수        
        let next = Math.floor((storey % 100) / 10); // 다음 자릿수
        
        if (current > 5) {
            // 현재 자릿수가 5보다 크면 위로 올라가는 게 이득
            answer += (10 - current);
            storey += (10 - current);
        } else if (current === 5 && next >= 5) {
            // 현재 자릿수가 5이고 다음 자릿수가 5 이상이면 위로 올라가는 게 이득
            answer += 5;
            storey += 5;
        } else {
            // 그 외의 경우는 아래로 내려가는 게 이득
            answer += current;
        }
        
        // 다음 자릿수로 이동
        storey = Math.floor(storey / 10);
    }
    
    return answer;
}