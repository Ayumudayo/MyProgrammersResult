function solution(progresses, speeds) {
    const answer = [];
    
    // 각 기능 일수 계산
    const requiredDays = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );

    // 첫 번째 기능의 배포 일정을 기준
    let releaseDay = requiredDays[0];
    let count = 1;

    for (let i = 1; i < requiredDays.length; i++) {
        if (requiredDays[i] <= releaseDay) {
            // 다음 기능이 기준 일수 이하로 완료되면 포함
            count += 1;
        } else {
            // 새 배포 집합
            answer.push(count);
            releaseDay = requiredDays[i];
            count = 1;
        }
    }
    
    // 마지막 배포 집합 추가
    answer.push(count);
    return answer;
}
