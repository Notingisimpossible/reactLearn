const LargeNumberTimes = (str1, str2) => {
  let result = ''
  let len = Math.max(str1.length, str2.length)
  str1 = str1.padStart(len,0)
  str2 = str2.padStart(len,0)
  let high
  for(let i=len-1; i>=0; i--) {
    !str2[i]&&(str2[i]=0)
    !str1[i]&&(str1[i]=0)
    var sum = parseInt(str2[i])+parseInt(str1[i])
    if(high>0){
      sum+=high 
    }
    high = parseInt(sum/10)
    result = sum%10 + result
  }
  if(high > 0) {
    result = high + result
  }
  return result
}

console.log( LargeNumberTimes('1', '999') )