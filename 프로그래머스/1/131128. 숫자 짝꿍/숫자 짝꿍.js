function solution(X, Y) {
    const answer = [];
    const mapX = new Map();
    const mapY = new Map();
    
    X = X.split("");
    Y = Y.split("");
    
    X.forEach(item => {
        mapX.set(item, (mapX.get(item) || 0) + 1);
    });
    
    Y.forEach(item => {
        mapY.set(item, (mapY.get(item) || 0) + 1);
    });
    
    mapX.forEach((val, key) => {
       if(mapY.has(key)) {
           const minCnt = Math.min(val, mapY.get(key));
           for (let i = 0; i < minCnt; i++)
               answer.push(key);
       } 
    });
    
    answer.sort((a, b) => {return b - a});
    
    if(answer.length === 0)
        return "-1";
    
    if(answer[0] === "0")
        return "0";
    
    return answer.join('');
}