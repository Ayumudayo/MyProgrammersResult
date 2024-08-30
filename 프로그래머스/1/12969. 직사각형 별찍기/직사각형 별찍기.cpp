#include <iostream>
#include <string>

using namespace std;

int main(void) {
    int a;
    int b;
    cin >> a >> b;
    
    string tmp(a, '*');
    
    for(int i = 0; i < b; ++i)
        cout << tmp << '\n';
    
    return 0;
}