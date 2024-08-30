#include <string>
#include <algorithm>
#include <cctype>

using namespace std;

bool solution(string s) {
    return all_of(s.begin(), s.end(), ::isdigit) && (s.size() == 4 || s.size() == 6);
}