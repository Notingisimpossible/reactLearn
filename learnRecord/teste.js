// const arr = ['C2','A2','A1','B1','C3']
// function paixu(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[i][0]<arr[j][0]){
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//       }
//     }
//   }
//   arr.map((item,index) => {
//     if(index < arr.length-1 && item[1]>arr[index+1][1] && item[0] == arr[index+1][0]){
//       [arr[index+1],arr[index]]=[arr[index],arr[index+1]]
//     }
//   })
//   return arr
// }

// console.log(paixu(arr))