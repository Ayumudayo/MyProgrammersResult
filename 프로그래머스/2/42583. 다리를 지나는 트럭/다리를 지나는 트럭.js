function solution(bridgeLength, weight, truckWeights) {
    let time = 0; // 총 걸린 시간
    let bridgeQueue = []; // 다리를 건너는 트럭들을 저장하는 큐 (트럭의 무게와 exitTime을 저장)
    let currentWeight = 0; // 현재 다리에 올라온 트럭들의 총 무게
    let trucks = truckWeights.reverse(); // 대기 중인 트럭들을 역순으로 정렬하여 pop()으로 처리

    while (bridgeQueue.length > 0 || trucks.length > 0) {
        time += 1;

        // 다리를 완전히 건넌 트럭이 있는지 확인
        if (bridgeQueue.length > 0 && bridgeQueue[0].exitTime === time) {
            let exitedTruck = bridgeQueue.shift();
            currentWeight -= exitedTruck.weight;
        }

        // 다음 트럭을 다리에 올릴 수 있는지 확인
        if (trucks.length > 0) {
            let nextTruckWeight = trucks[trucks.length - 1];
            if (currentWeight + nextTruckWeight <= weight) {
                let truckWeight = trucks.pop();
                bridgeQueue.push({ 
                    weight: truckWeight, 
                    exitTime: time + bridgeLength 
                });
                currentWeight += truckWeight;
            }
        }

        // 만약 다리에 올릴 트럭이 없거나 무게 제한으로 추가하지 못했다면, 시간을 건너뛰기 위해 다음 트럭의 exitTime으로 이동
        if (bridgeQueue.length > 0 && trucks.length > 0 && currentWeight + trucks[trucks.length - 1] > weight) {
            // 다음 트럭이 올라갈 수 있는 시간으로 시간을 빠르게 이동
            let nextExitTime = bridgeQueue[0].exitTime;
            time = Math.max(time, nextExitTime - 1);
        }
    }

    return time;
}