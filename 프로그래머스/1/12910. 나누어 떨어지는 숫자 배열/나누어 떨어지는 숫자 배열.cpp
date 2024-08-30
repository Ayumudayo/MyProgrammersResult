#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr, int divisor) {
    vector<int> answer;
    
    copy_if(arr.begin(), arr.end(), back_inserter(answer), [divisor](int item) {
        return item % divisor == 0;
    });
    
    if(answer.size() == 0)
        return {-1};
    
    sort(answer.begin(), answer.end());
    
    return answer;
}