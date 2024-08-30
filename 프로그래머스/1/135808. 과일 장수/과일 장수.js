// k : 점수 (필요 없음)
// m : 포장 단위 개수
// p : 상자 안에서 가장 낮은 점수
// p * m : 상자 가격

// 내림차순 정렬 후 자르기

function solution(k, m, score) {    
    let answer = 0;
    score.sort((a, b) => b - a);
    
    // 3번째에 있는 게 각 박스 별 최저점
    for (let i = 0; i + m <= score.length; i += m) {
        answer += score[i + m - 1] * m;
    }
    
    return answer;
}