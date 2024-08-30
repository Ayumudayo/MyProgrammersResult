#include <string>
#include <cmath>

using namespace std;

int solution(int n) {
    int result = 0;
    
    while (n > 0) {
        result = result * 3 + (n % 3);
        n /= 3;
    }
    
    return result;
}