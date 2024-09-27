function solution(numbers) {
    // 숫자를 문자열로 변환
    const strNums = numbers.map(num => num.toString());

    // 커스텀 정렬 함수
    strNums.sort((a, b) => {
        // 두 숫자를 이어 붙인 후 비교
        const way1 = a + b;
        const way2 = b + a;
        
        // 내림차순 정렬
        if (way1 > way2) return -1;
        if (way1 < way2) return 1;
        
        return 0;
    });

    // 모든 숫자가 '0'인 경우 '0'을 반환
    if (strNums[0] === '0') {
        return '0';
    }

    // 배열 이어 붙이기
    return strNums.join('');
}