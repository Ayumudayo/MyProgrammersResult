function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let h = 3; h <= Math.sqrt(total); h++) {
        const w = Math.floor(yellow / (h - 2)) + 2;
        
        if (w * h === total && (w - 2) * (h - 2) === yellow)
            return [w, h];
    }
    return [];
}