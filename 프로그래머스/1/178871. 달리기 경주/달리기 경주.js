function solution(players, callings) {
    const pObj = {};
    for (let i = 0; i < players.length; i++) {
        pObj[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const index = pObj[callings[i]];
        if (index > 0) {
            const prevPlayer = players[index - 1];
            
            const temp = players[index];
            players[index] = prevPlayer;
            players[index - 1] = temp;
            
            pObj[callings[i]] = index - 1;
            pObj[prevPlayer] = index;
        }
    }

    return players;
}