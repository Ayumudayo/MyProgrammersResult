#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(vector<int> food) {
    string result = "";
    
    for (int i = 1; i < food.size(); i++) {
        int count = food[i] / 2;
        result.append(count, '0' + i);
    }
    
    string final_result = result + '0';
    
    reverse(result.begin(), result.end());
    final_result += result;
    
    return final_result;
}