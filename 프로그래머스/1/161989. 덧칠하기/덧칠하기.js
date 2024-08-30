// n : 길이가 n미터인 벽. 1미터 단위로 n개 구역으로 나눔
// m : 롤러의 길이
// section : 다시 칠하기로 한 섹션 번호

// 연속되는 부분을 파악 후 길이와 m을 비교

function solution(n, m, section) {    
    if(m === 1)
        return section.length;
    
    let answer = 1;
    let start = section[0];
    
    for(item of section) {
        if (start + (m - 1) < item) {
            start = item;
            answer++;
        }
    }
    
    return answer;
}