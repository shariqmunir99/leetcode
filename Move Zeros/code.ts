/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i: number = 0;

  for (let j: number = 0; j < nums.length; j++) {
    if (nums[j] != 0) {
      let temp: number = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); //[1,3,12,0,0]
