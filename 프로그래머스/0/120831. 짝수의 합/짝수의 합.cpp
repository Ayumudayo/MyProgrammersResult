#include <cmath>

int solution(int n) {
    int cnt = floor(n / 2);
    int answer = cnt * (cnt + 1);
    return answer;
}