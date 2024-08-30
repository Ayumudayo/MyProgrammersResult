using namespace std;

long long solution(int price, int money, int count)
{
    long long sum = 0;
    
    sum = 1LL * ((count * (count + 1)) / 2) * price;

    return sum > money ? sum - money : 0;
}