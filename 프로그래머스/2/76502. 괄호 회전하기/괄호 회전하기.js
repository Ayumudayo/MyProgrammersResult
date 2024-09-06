function isValid(s) {
    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');

    for (let char of s) {
        if (map.has(char)) {
            // 여는 괄호이면 스택에 추가
            stack.push(char);
        } else {
            // 닫는 괄호가 스택의 맨 위 여는 괄호에 맞지 않으면 유효하지 않음
            const top = stack.pop();
            if (map.get(top) !== char) {
                return false;
            }
        }
    }

    // 모든 괄호가 짝을 이루면 스택이 비어있어야 함
    return stack.length === 0;
}

function rotate(str, num) {
    if (num === 0)
        return str;
    num = num % str.length; // 회전 횟수를 문자열 길이로 나눈 나머지로 설정
    return str.slice(num) + str.slice(0, num);
}

function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(isValid(rotate(s, i)))
            answer++;
    }
    
    return answer;
}