#include <string>
#include <vector>
#include <cstring>

using namespace std;

string solution(string phone_number) {
    memset(&phone_number[0], '*', phone_number.size() - 4);
    
    return phone_number;
}