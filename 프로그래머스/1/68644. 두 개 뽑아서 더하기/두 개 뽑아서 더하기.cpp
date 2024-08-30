#include <vector>
#include <bitset>

using namespace std;

vector<int> solution(vector<int> numbers) {
    constexpr int MAX_SUM = 200;
    bitset<MAX_SUM + 1> sums;
    
    for (auto it1 = numbers.begin(); it1 != numbers.end(); ++it1) {
        for (auto it2 = next(it1); it2 != numbers.end(); ++it2) {
            sums.set(*it1 + *it2);
        }
    }
    
    vector<int> answer;
    answer.reserve(sums.count());
    
    for (int i = 0; i <= MAX_SUM; ++i) {
        if (sums[i]) {
            answer.push_back(i);
        }
    }
    
    return answer;
}