function solution(number, k) {
    let stack = [];
    for (let num of number) {
        // k가 남아있고, 스택에 원소가 있고, 스택 끝의 원소가 num보다 작을 때
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    
    // 만약 k가 남아있다면 뒤에서부터 제거
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    return stack.join('');
}