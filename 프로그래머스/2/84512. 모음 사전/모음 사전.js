function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const weights = [781, 156, 31, 6, 1]; // 각 위치별 가중치

    // 단어의 각 문자에 대해 가중치와 인덱스를 곱하고, 단어의 길이를 더함
    const position = word.split('').reduce((sum, cur, idx) => {
        return sum + weights[idx] * vowels.indexOf(cur);
    }, 0) + word.length;

    return position;
}