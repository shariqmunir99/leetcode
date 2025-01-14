function convert(s: string, numRows: number): string {
  if (numRows < 2) return s;
  let rows = new Array(numRows).fill("");
  rows[0] += s[0];
  let i = 1;
  while (i < s.length) {
    for (let j = 1; j < numRows; j++, i) {
      if (i < s.length) rows[j] += s[i++];
    }

    for (let j = numRows - 2; j >= 0; j--) {
      if (i < s.length) rows[j] += s[i++];
    }
  }
  return rows.reduce((acc, row) => (acc += row), "");
}

console.log(convert("Shariq", 2));
