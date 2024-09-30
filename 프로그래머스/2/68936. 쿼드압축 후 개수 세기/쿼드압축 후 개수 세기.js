function solution(arr) {
    // 0 : 1
    const result = [0, 0];
    
    // 압축을 수행 할 재귀 함수
    function compress(x, y, size) {
        const area = arr[x][y]; // 시작지점 -> size만큼 더하거나 하여 위치를 표시
        let isSame = true;      // 각 영역의 값이 다 동일한지
        
        for(let i = x; i < x + size; i++) {
            for(let j = y; j < y + size; j++) {
                if(arr[i][j] != area) {     // 순회한 위치의 값이 영역의 값과 다를 때
                    isSame = false;
                    break;
                }
                // 기본 값이 true이므로 같으면 그냥 넘어간다
            }
            if(!isSame)
                break;
        }
        
        // 다 같으면 그 영역은 그걸로 끝
        // 더 쪼갤 필요가 없다.
        if(isSame)
            result[area]++;
        else {  // 다르면 각 사분면에 대해 재귀적으로 확인 수행
            const halfSize = size / 2;
            compress(x, y, halfSize);                           // 좌상
            compress(x, y + halfSize, halfSize);                // 우상
            compress(x + halfSize, y, halfSize);                // 좌하
            compress(x + halfSize, y + halfSize, halfSize);     // 우하
        }
    }
    
    compress(0, 0, arr.length);
    return result;
}