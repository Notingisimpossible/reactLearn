// 原地去重
// function reduceArr(arr){
//   let i = 0,j=1
//   while(j<arr.length){
//     if(arr.indexOf(arr[j])!=j){
//       arr[i] = arr[i] + arr[j]
//       arr[j] = arr[i] - arr[j]
//       arr[i] = arr[i] - arr[j]
//       i++
//     }
//     j++
//   }
//   arr.splice(0,i)
//   return arr
// }
// 非原地去重
// function reduceArr(arr) {
//   let result = arr.reduce((preItem, item) => {
//     if(!preItem.includes(item)){
//       preItem.push(item)
//     }
//     return preItem
//   },[])
//   return result
// }

// 利用Set去重
function reduceArr(arr) {
  return [...new Set(arr)]
}
let arr = [1, 3, 5, 1, 2, 3, 7, 3, 5, 4]
console.log(reduceArr(arr))