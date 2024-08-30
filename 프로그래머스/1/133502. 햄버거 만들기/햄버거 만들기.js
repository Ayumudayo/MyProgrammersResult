// 1 : 빵
// 2 : 야채
// 3 : 패티

function solution(ing) {
    const pattern = [1, 2, 3, 1];
    const stack = [];
    let answer = 0;
    
    for (let i = 0; i < ing.length; i++) {
        stack.push(ing[i]);
        
        if (stack.length >= 4 && stack.slice(-4).join('') === pattern.join('')) {
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}
