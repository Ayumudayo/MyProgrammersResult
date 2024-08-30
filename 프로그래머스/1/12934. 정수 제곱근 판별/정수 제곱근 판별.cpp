#include <cmath>

using namespace std;

long long solution(long long n) {
    double sqrtResult = std::sqrt(n);
    long long intSqrtResult = static_cast<long long>(std::round(sqrtResult));

    if (intSqrtResult * intSqrtResult == n) {
        long long nextInt = intSqrtResult + 1;
        return nextInt * nextInt;
    } else {
        return -1;
    }
}