#include <string>

using namespace std;

int solution(string t, string p) {
    int answer = 0;
    int windowSize = p.length();
    
    for (int i = 0; i <= t.length() - windowSize; ++i) {
        if (t.compare(i, windowSize, p) <= 0) {
            ++answer;
        }
    }
    
    return answer;
}