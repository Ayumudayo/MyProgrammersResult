#include <string>
#include <vector>
#include <numeric>

using namespace std;

double solution(vector<int> v) {    
    double sum = reduce(v.begin(), v.end(), 0.0);    
    double answer = sum / v.size();
    
    return answer;
}