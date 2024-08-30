#include <string>
#include <vector>
#include <cstdlib>

using namespace std;

long long solution(int a, int b) {
    if (a > b) {
        swap(a, b);
    }
    
    long long n = b - a + 1;
    return (long long)(a + b) * n / 2;
}
