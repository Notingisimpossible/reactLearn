// cvte笔试题
// 1. 求字符串不重复的最大字串
// function findLengthestString(str) {
//   let result = 0
//   let i = 0
//   let j = 0
//   while(j <= str.length - 1) {
//     let pos = str.indexOf(str.charAt(j),i)
//     if(pos < j) {
//       i = pos + 1
//     }
//     result = Math.max(j-i+1, result)
//     j++
//   }
//   return result
// }

// let str = "mjknjbi"
// console.log(findLengthestString(str))

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let i = 0;
	let flag = 0;
	let length = 0;
	let result = 0;
	while (i<s.length) {
		let pos = s.indexOf(s.charAt(i),flag);
		if (pos < i) {
			if (length > result) {
				result = length;
			}
			if (result >= s.length - pos - 1) {
				return result;
			}
			length = i - pos;
			flag = pos + 1;
		}
		i++;
	}
	return length;
}

var str ="bbblbbb";
console.log(lengthOfLongestSubstring(str));
// 求数组符合min<nums[i]<max，可以切割出的数组个数
// function arrLen(nums, min, max) {
//   let resultArr = []
//   let result = 0
//   let len = 0
//   nums.map(item => {
//     if(item>min&&item<max){
//       len++
//     }else{
//       resultArr.push(len)
//       len=0
//     }
//   })
//   resultArr.map(item => {
//     result = result + (item+1)*item/2
//   })
//   return result
// }

// let arr = [5,1, 4, 7, 4, 3, 1, 5]
// console.log(arrLen(arr,0,5))