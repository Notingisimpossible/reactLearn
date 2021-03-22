// 利用api
function bp(arr){
  return arr.flat(Infinity)
}
function bp(arr){
  while(arr.some((item) => {return typeof item === "object"})){
    arr = [].concat(...arr)
  }
  return arr
}
// console.log(bp(arr))

// 利用reduce
// function bp(arr) {
//   arr = arr.reduce((preItem, item) => {
//     if(typeof item === "object") {
//       while(item.some(items => typeof items === "object")){
//         item = [].concat(...item)
//       }
//       preItem.push(...item)
//     }else{
//       preItem.push(item)
//     }
//     return preItem
//   },[])
//   return arr
// }
let arr = [1, 2, [3, 4, [5, [6]], 7], 8, [9, [10]], 11]
console.log(bp(arr))