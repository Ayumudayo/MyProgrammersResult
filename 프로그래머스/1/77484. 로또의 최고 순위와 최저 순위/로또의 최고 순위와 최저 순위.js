function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const zeroCnt = lottos.filter(n => !n).length;
    const matchCnt = win_nums.filter(n => lottos.includes(n)).length;
    
    return [rank[zeroCnt + matchCnt], rank[matchCnt]];
}