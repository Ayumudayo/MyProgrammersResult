/**
각 방위의 최대값
북 : (Min, N)
남 : (Max, N)
서 : (N, Min)
동 : (N, Max)
*/

function solution(wallpaper) {
    let N = Infinity, W = Infinity;
    let S = -Infinity, E = -Infinity;
    
    wallpaper.forEach((item, index) => {
        if (item.includes('#')) {
            N = Math.min(N, index);
            S = Math.max(S, index);
        }
        [...item].forEach((j, jIndex) => {
            if (j === '#') {
                W = Math.min(W, jIndex);
                E = Math.max(E, jIndex);
            }
        });
    });
    
    // 방향: 북(N), 서(W), 남(S), 동(E)
    const answer = [N, W, S + 1, E + 1];
    
    return answer;
}
