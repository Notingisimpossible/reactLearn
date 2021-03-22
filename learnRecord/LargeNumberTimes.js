// 大数相乘
const LargeNumberTimes = (str1, str2) => {
  let result = []
  arr1 = str1.split('').map(item => parseInt(item))
  arr2 = str2.split('').map(item => parseInt(item))

  for(var i = arr1.length - 1; i >=0; i--) {
    for(var j = arr2.length - 1; j >=0; j--) {
      !result[i+j]&&(result[i+j]=0)
      result[i+j]+=arr1[i]*arr2[j]
    }
  }

  result.reverse()

  for(var i = 0; i < result.length; i++) {
    let high = 0

    !result[i]&&(result[i]=0)

    high = parseInt(result[i]/10)
    if(high > 0) {
      !result[i+1]&&(result[i+1]=0)
      result[i+1] += high
    }
    result[i] = result[i]%10
  }

  return result.reverse().join('')
}

console.log( LargeNumberTimes('12', '56') )