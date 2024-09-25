function solution(numbers) {
    const stack = [];
    const answer = new Array(numbers.length).fill(-1);

    for (let i = 0; i < numbers.length; i++) {
        // 현재 숫자가 스택의 마지막 인덱스에 해당하는 숫자보다 클 때
        while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
            // 인덱스로 각 값들을 비교한다
            const index = stack.pop();
            answer[index] = numbers[i];
        }
        stack.push(i);
    }

    return answer;
}
