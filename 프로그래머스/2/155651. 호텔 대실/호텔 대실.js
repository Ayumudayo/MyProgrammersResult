function solution(book_time) {
    // 분단위 관리, 종료시간에 청소시간 추가
    let events = [];
    for (const [start, end] of book_time) {
        // 숫자만 남김
        const [startHour, startMinute] = start.split(":").map(Number);
        const [endHour, endMinute] = end.split(":").map(Number);
        
        // 분단위 변환
        const checkIn = startHour * 60 + startMinute;
        const checkOut = endHour * 60 + endMinute + 10; // 청소 시간 추가
        
        // 체크인/아웃 이벤트 추가
        events.push({ time: checkIn, type: 'in' });
        events.push({ time: checkOut, type: 'out' });
    }

    // 이벤트를 시간 순으로 정렬
    events.sort((a, b) => {
        if (a.time === b.time) {
            // 시간이 같을 경우 체크아웃을 먼저 처리
            if (a.type === b.type) return 0;
            return a.type === 'out' ? -1 : 1;
        }
        return a.time - b.time;
    });

    let curRooms = 0;
    let maxRooms = 0;

    // 사용 중인 객실 수 관리
    // 같은 시간일 경우 체크아웃이 먼저 처리돼
    // 불필요하게 방이 늘어나는 일이 없다
    for (const event of events) {
        if (event.type === 'in') {
            curRooms += 1;
            maxRooms = Math.max(maxRooms, curRooms);
        } else {
            curRooms -= 1;
        }
    }

    return maxRooms;
}