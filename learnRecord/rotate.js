/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   (nums.splice(nums.length-k)).reverse().map(item => {
//     nums.unshift(item)
//   })
//   return nums
// };

let nums = [1,2,3,4,5,6,7]
nums.splice(4, 3, 7, 6, 7)
console.log(nums)