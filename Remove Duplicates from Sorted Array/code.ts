function removeDuplicates(nums: number[]): number {
  const result: number[] = [];
  let res: number = nums[0];
  let i = 1;
  let j = i;
  while (i < nums.length) {
    if (nums[i] !== res) {
      res = nums[i];
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
    i++;
  }
  return j;
}

const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums1));
console.log(nums1);
