function solution(babbling) {
    const pattern = /^(aya|ye|woo|ma)+$/;

    return babbling.filter(word => {
        if (!pattern.test(word)) return false;
        return !/(aya|ye|woo|ma)\1/.test(word);
    }).length;
}