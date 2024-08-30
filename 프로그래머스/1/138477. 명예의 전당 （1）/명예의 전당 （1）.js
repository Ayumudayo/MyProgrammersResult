function solution(k, score) {
    const hall = [];
    let min = Infinity;
    
    return score.map(s => {
        if (hall.length < k) {
            hall.push(s);
            min = Math.min(min, s);
        } else if (s > min) {
            const index = hall.indexOf(min);
            hall[index] = s;
            min = Math.min(...hall);
        }
        
        return min;
    });
}