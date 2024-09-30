function solution(order) {
    let answer = 0;
    const stack = [];
    let currentBox = 1;  // 메인 컨베이어에서 박스가 1부터 차례대로 이동

    for (let target of order) {
        // 메인 컨베이어에서 박스를 꺼내 목표 박스와 일치할 때까지 스택에 쌓는다.
        while (currentBox <= target) {
            stack.push(currentBox);
            currentBox++;
        }

        // 스택의 가장 위 박스가 목표 박스와 일치하면 처리
        if (stack[stack.length - 1] === target) {
            stack.pop();
            answer++;
        } else {
            // 스택의 맨 위 박스가 목표와 다르면 더 이상 진행 불가
            break;
        }
    }

    return answer;
}
