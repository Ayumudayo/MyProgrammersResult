#include <string>
#include <vector>
#include <cmath>

using namespace std;

string solution(string s) {
    int mid = s.size() / 2;
    
    if(s.size() % 2 == 1)
        return string(1, s[mid]);
    
    return s.substr(mid - 1, 2);
}