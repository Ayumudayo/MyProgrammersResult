function solution(keymap, targets) {
  const kMap = new Map();

  keymap.forEach(item =>
    [...item].forEach((char, index) =>
      kMap.set(char, Math.min(kMap.get(char) || Infinity, index + 1))
    )
  );

  return targets.map(target =>
    [...target].reduce((sum, char) => {
      if (!kMap.has(char)) return -1;
      return sum === -1 ? -1 : sum + kMap.get(char);
    }, 0)
  );
}
