#include <cmath>

using namespace std;

int solution(int left, int right) {
    int answer = 0;
    
    for (int num = left; num <= right; num++) {
        int sqrtN = sqrt(num);
        
        if (sqrtN * sqrtN == num)
            answer -= num;
        else
            answer += num;
    }        
    
    return answer;
}
