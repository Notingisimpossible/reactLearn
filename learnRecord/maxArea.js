
// var maxArea = function(height) {
//   var result = 0
//   for(let i=0; i < height.length; i++) {
//     for(let j=i+1; j < height.length; j++) {
//       if((j-i)*Math.min(height[i], height[j]) > result) {
//         result = (j-i)*Math.min(height[i], height[j])
//       }
//     }
//   }
//   return result
// };


/**
 * @param {number[]} height
 * @return {number}
 */
// O(n)
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  var result = 0
  while(left !== right) {
    let minH = Math.min(height[left], height[right])
    let w = right-left
    let sum = minH*w
    minH === height[left] ? left++ : right--
    if(sum > result) {
      result = sum
    }
  }
  return result
};
let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))