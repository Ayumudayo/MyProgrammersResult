#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

int solution(string s) {
    unordered_map<string, string> wordToNum = {
        {"zero", "0"}, {"one", "1"}, {"two", "2"}, {"three", "3"}, {"four", "4"},
        {"five", "5"}, {"six", "6"}, {"seven", "7"}, {"eight", "8"}, {"nine", "9"}
    };

    string result;
    string current;
    for (char c : s) {
        if (isdigit(c)) {
            result += c;
        } else {
            current += c;
            if (wordToNum.find(current) != wordToNum.end()) {
                result += wordToNum[current];
                current.clear();
            }
        }
    }

    return stoi(result);
}