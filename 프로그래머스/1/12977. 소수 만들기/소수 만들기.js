function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 5; i <= sqrt; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

function countPrime(arr, choose, start = 0, sum = 0, count = 0) {
    if (choose === 0) {
        return isPrime(sum) ? 1 : 0;
    }

    let primeCount = 0;

    for (let i = start; i <= arr.length - choose; i++) {
        primeCount += countPrime(arr, choose - 1, i + 1, sum + arr[i], count + 1);
    }

    return primeCount;
}

function solution(nums) {
    return countPrime(nums, 3);
}