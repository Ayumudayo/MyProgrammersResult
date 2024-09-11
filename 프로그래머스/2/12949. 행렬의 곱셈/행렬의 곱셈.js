function multMat(matA, matB) {
    let result = [];
    let rowsA = matA.length;
    let colsA = matA[0].length;
    let colsB = matB[0].length;

    // result 초기화
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;
        }
    }

    // 행렬 곱셈 연산
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matA[i][k] * matB[k][j];
            }
        }
    }
    return result;
}

function solution(arr1, arr2) {
    return multMat(arr1, arr2);
}