function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    let rotated = s + s; // 문자열을 두 번 연결하여 회전 효과 생성
    
    for (let i = 0; i < s.length; i++) {
        if (isValid(rotated.slice(i, i + s.length))) {
            answer++;
        }
    }
    
    return answer;
}