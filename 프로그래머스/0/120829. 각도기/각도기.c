#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int angle) {
    int ans = -1;
    if (angle < 90) {
        ans = 1;
    } else if (angle == 90) {
        ans = 2;
    } else if (angle < 180) {
        ans = 3;
    } else if (angle == 180) {
        ans = 4;
    } else {
        ans = -1;
    }
    return ans;
}