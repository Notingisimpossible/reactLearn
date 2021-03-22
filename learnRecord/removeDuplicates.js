/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0, right = 1;
  while(right < nums.length){
      if(nums[left] !== nums[right]){
          nums[++left] = nums[right];
      }
      right++;
  }
  nums.splice(left+1)
  return left + 1;
};


let nums = [1, 1, 1, 2, 3, 4 , 4, 5]
removeDuplicates(nums)
console.log(nums)