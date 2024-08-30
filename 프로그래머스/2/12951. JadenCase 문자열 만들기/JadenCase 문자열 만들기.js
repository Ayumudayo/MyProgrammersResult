function solution(s) {
    return s
        .toLowerCase()
        .split(' ')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ');
}
