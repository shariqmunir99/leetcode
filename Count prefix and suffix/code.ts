const isPrefixAndSuffix = (s1: string, s2: string) => {
  if (s1.length < s2.length) {
    if (s2.startsWith(s1)) {
      if (s2.endsWith(s1)) return true;
    }
  }
  return false;
};
function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++)
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
  }
  return count;
}
