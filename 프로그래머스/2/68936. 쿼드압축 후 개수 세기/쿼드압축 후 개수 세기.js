function solution(arr) {
    // 0 : 1
    const result = [0, 0];
    
    function compress(x, y, size) {
        const area = arr[x][y];
        let isSame = true;
        
        for(let i = x; i < x + size; i++) {
            for(let j = y; j < y + size; j++) {
                if(arr[i][j] != area) {
                    isSame = false;
                    break;
                }
            }
            if(!isSame)
                break;
        }
        
        if(isSame)
            result[area]++;
        else {
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