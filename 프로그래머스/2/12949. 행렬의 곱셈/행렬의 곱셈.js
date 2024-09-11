function multMat(matA, matB) {
    return matA.map(rowA => 
        matB[0].map((_, i) => 
            rowA.reduce((sum, val, j) => sum + val * matB[j][i], 0)
        )
    );
}

function solution(arr1, arr2) {
    return multMat(arr1, arr2);
}