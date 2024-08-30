#include <string>
#include <vector>
#include <numeric> // std::reduce

using namespace std;

int solution(vector<int> absolutes, vector<bool> signs) {
    return inner_product(absolutes.begin(), absolutes.end(), signs.begin(), 0,
                         plus<int>(), [](int absolute, bool sign) {
                             return sign ? absolute : -absolute;
                         });
}