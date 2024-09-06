function solution(k, tangerine) {
    const tMap = new Map();
    for (const size of tangerine) {
        tMap.set(size, (tMap.get(size) || 0) + 1);
    }
    
    const tSorted = Array.from(tMap.values()).sort((a, b) => b - a);
    let types = 0;
    let count = 0;
    for (const t of tSorted) {
        count += t;
        types += 1;
        if (count >= k) {
            return types;
        }
    }
    return types;
}