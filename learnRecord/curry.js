function currery(fn) {
  let args = [].slice.call(arguments, 1)
  return function () {
    let newArgs = [].slice.call(arguments)
    let allArgs = args.concat(newArgs)
    //如果没有传参数则直接返回结果    
    if(arguments.length === 0) {
      return fn.apply(null, allArgs)
    }
  // 继续柯里化    return 
  currery.call(null,fn, ...allArgs)
  }
}
function add(a, b, c) {
  return a + b + c
}
let add1 = currery(add, 1)
console.log(add1(9, 8)())//18console.log(add1(2)(3)(4)()) 