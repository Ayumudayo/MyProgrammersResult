using namespace std;

long long collatz(long long n, int cnt)
{   
    if (cnt >= 500)
        return -1;
    
    if (n == 1)
        return cnt;    
    
    return n % 2 == 0 ? collatz(n / 2, ++cnt) : collatz(n * 3 + 1, ++cnt);
}

int solution(int num) {
    return (int)collatz(num, 0);
}