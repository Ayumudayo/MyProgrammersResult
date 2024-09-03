// 절반으로 갈면 지수승만큼

function solution(n,a,b, cnt = 1)
{
    if ((Math.abs(a - b) === 1) && Math.min(a, b) % 2 !== 0)
        return cnt;
    
    return solution(n, Math.ceil(a / 2), Math.ceil(b / 2), cnt + 1);
}


