function prefixCount(words: string[], pref: string): number {
  return words.reduce((accumulator, currentValue) => {
    if (currentValue.startsWith(pref)) return accumulator + 1;
    return accumulator;
  }, 0);
}
