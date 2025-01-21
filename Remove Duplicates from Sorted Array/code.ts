function removeDuplicates(nums: number[]): number {
  const result: number[] = [];
  let k = 1;
  let res: number = nums[0];
  let i = 1;
  let j = i;
  const ress: number[] = [];
  while (i < nums.length) {
    if (nums[i] !== res) {
      k++;
      res = nums[i];
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
    i++;
  }
  return k;
}

const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums1));
console.log(nums1);
