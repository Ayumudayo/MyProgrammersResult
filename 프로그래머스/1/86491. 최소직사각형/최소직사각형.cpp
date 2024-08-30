#include <algorithm>
#include <vector>

using namespace std;

int solution(vector<vector<int>> sizes) {
    int wMax = 0, hMax = 0;
    
    for (const auto& size : sizes) {
        wMax = max(wMax, max(size[0], size[1]));
        hMax = max(hMax, min(size[0], size[1]));
    }
    
    return wMax * hMax;
}