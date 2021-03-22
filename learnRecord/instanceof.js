const myInstanceOf = function(a, b) {
  if(a == null) {
    return false
  }
  if(typeof a !== "function"&&typeof a !== "object") {
    console.log(1)
    return false
  }
  while(a.__proto__ ){
    if(a.__proto__ === b.prototype){
    console.log(2)

      return true
    }
    a = a.__proto__
  }
  console.log(3)

  return false
}

let x = function(){}
console.log(myInstanceOf(null, Object))