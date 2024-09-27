function solution(bridgeLength, weight, truckWeights) {
    let time = 0;
    let bridge = Array(bridgeLength).fill(0);
    let currentWeight = 0;
    let trucks = truckWeights.reverse(); // 대기 중인 트럭들을 역순으로 정렬 -> shift() 사용을 피하기 위해

    while (bridge.length > 0) {
        time += 1;

        // 다리의 앞부분에서 트럭을 제거하고 현재 무게를 조정
        let exited = bridge.shift();
        currentWeight -= exited;

        // 다음 트럭을 다리에 올릴 수 있는지 확인
        if (trucks.length > 0) {
            let nextTruckWeight = trucks[trucks.length - 1]; // 대기열의 첫 번째 트럭
            if (currentWeight + nextTruckWeight <= weight) {
                let truckWeight = trucks.pop();
                bridge.push(truckWeight);
                currentWeight += truckWeight;
            } else {
                bridge.push(0); // 트럭을 올릴 수 없으면 0을 추가하여 시간만 증가
            }
        }
    }

    return time;
}