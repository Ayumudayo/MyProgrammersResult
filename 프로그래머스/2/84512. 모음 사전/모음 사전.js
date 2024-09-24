function dfs(word, vowels, current, state) {
    if (state.found) return; // 목표 단어를 찾은 경우 탐색 종료

    for (let i = 0; i < vowels.length; i++) {
        const next = current + vowels[i];
        state.position++;

        // 현재 단어가 목표 단어와 같으면 위치 반환
        if (next === word) {
            state.found = true;
            return;
        }

        // 단어의 길이가 5 이하인 경우에만 계속 탐색
        if (next.length < 5) {
            dfs(word, vowels, next, state);
            if (state.found) return; // 목표 단어를 찾았으면 추가 탐색 종료
        }
    }
}

function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    // 상태 객체를 생성하여 position과 found를 관리
    let state = { position: 0, found: false };
    
    dfs(word, vowels, '', state);
    return state.position;
}