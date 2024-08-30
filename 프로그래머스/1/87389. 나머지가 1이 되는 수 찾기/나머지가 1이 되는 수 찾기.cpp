#include <cmath>

int solution(int n) {    
    int target = n - 1;
    for(int i = 2; i <= std::sqrt(target); i++)
        if (target % i == 0)
            return i;
    
    return target;
}