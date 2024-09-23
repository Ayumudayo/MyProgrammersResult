// 분단위로 계산
// 맵으로 정리

function inMin(time) {
    const div = time.split(":");
    return parseInt(div[0]) * 60 + parseInt(div[1]);
}

function solution(fees, records) {
    let carMap = new Map();
    let io = new Map();
    let res = new Map();

    for (let item of records) {
        let record = item.split(" ");
        const carNum = record[1];
        const time = inMin(record[0]);

        if (record[2] === "IN") {
            carMap.set(carNum, (carMap.get(carNum) || 0) - time);
            io.set(carNum, 1);
        } else {
            carMap.set(carNum, carMap.get(carNum) + time);
            io.set(carNum, 0);
        }
    }

    // 출차 없는 차 확인
    const maxMin = inMin("23:59");
    for (const [carNum, status] of io) {
        if (status === 1) {
            carMap.set(carNum, carMap.get(carNum) + maxMin);
        }
    }

    // 요금 계산
    for (const [carNum, totalMin] of carMap) {
        const curFee = res.get(carNum) || 0;
        if (totalMin <= fees[0]) {
            res.set(carNum, curFee + fees[1]);
        } else {
            const overFee = Math.ceil((totalMin - fees[0]) / fees[2]) * fees[3];
            res.set(carNum, curFee + fees[1] + overFee);
        }
    }

    // 차량 번호 기준 정렬
    const sortedRes = new Map([...res.entries()].sort((a, b) => a[0].localeCompare(b[0])));

    return [...sortedRes.values()];
}