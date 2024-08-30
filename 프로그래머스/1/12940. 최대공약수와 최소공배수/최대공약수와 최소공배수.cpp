#include <vector>

using namespace std;

int gcd(int n, int m) {
    while (m != 0) {
        int r = n % m;
        n = m;
        m = r;
    }
    return n;
}

int lcm(int n, int m) {
    return (n * m) / gcd(n, m);
}

vector<int> solution(int n, int m) {
    return {gcd(n, m), lcm(n, m)};
}