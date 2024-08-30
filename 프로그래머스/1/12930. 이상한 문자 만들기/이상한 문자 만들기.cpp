#include <string>
#include <cctype>

std::string solution(std::string s) {
    bool isEven = true;
    
    for (char &c : s) {
        c = isspace(c) ? ' ' : (isEven ? toupper(c) : tolower(c));
        isEven = isspace(c) ? true : !isEven;
    }
    
    return s;
}