#include <vector>
#include <algorithm> 
#include <string>

using namespace std;

long long solution(long long n) {
    vector<int> v;
    string concatStr;
    
    while (n > 0) {
        v.push_back(n % 10);
        n /= 10;
    }
    
    sort(v.rbegin(), v.rend());
    for (int num : v) {
        concatStr += to_string(num);
    }
    
    return stoll(concatStr);
}