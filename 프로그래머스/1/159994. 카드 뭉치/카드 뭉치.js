function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    
    for (const word of goal) {
        if (cards1[i] === word) i++;
        else if (cards2[j] === word) j++;
        else return "No";
    }
    
    return "Yes";
}