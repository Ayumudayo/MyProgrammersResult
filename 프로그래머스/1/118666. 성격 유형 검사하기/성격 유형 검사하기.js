function solution(survey, choices) {
    const types = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    survey.forEach((type, i) => {
        const score = choices[i];
        if (score < 4) {
            scores[type[0]] += 4 - score;
        } else if (score > 4) {
            scores[type[1]] += score - 4;
        }
    });
    
    return types.map(([a, b]) => scores[b] > scores[a] ? b : a).join('');
}