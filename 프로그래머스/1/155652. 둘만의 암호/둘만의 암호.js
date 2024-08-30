function solution(s, skip, index) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";    
    const filtered = [...alpha].filter(char => !skip.includes(char)).join('');

    let answer = "";

    for (const char of s) {
        const curIndex = filtered.indexOf(char);
        const nIndex = (curIndex + index) % filtered.length;
        answer += filtered[nIndex];
    }
    
    return answer;
}
