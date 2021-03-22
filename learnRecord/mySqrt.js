function mySqtr(x){
  let x1 = x
  while(x1*x1 > x){
    x1 = (x1+x/x1)/2
  }
  return x1
}

let x = 16
console.log(mySqtr(x))