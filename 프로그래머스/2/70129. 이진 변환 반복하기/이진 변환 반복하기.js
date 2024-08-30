function solution(s, bCnt = 0, totalCnt = 0) {
    while (s !== "1") {
        totalCnt += (s.match(/0/g) || []).length; // 문자열에서 0의 개수를 세기
        s = (s.replace(/0/g, "").length).toString(2); // 0을 제거한 후 길이를 2진수로 변환
        bCnt++;
    }
    return [bCnt, totalCnt];
}
