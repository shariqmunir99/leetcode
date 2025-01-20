function majorityElement(nums: number[]): number {
  let res: number = 0;
  let majority: number = 0;
  nums.forEach((num) => {
    if (majority === 0) {
      res = num;
    }
    if (num === res) {
      majority += 1;
    } else majority -= 1;
  });
  return res;
}
