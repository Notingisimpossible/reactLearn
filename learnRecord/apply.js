Object.prototype.myApply = function (fn) {
  // fn为undefined或者null时，根据条件将其设为global或者window
  if(!fn){
    fn = typeof window === "undefined" ? global : window
  }
  let result
  let args = [...arguments[1]]
  fn.x = this
  if(!args){
    result = fn.x()
  }else{
    result = fn.x(...args)
  }
  return result
}

Object.prototype.myCall = function (fn) {
  // fn为undefined或者null时，根据条件将其设为global或者window
  if(!fn) {
    fn = typeof window === "undefined" ? global : window
  }
  let result
  let args = [...arguments].slice(1)
  fn.x = this
  if(!args){
    result = fn.x()
  }else{
    result = fn.x(...args)
  }
  return result
}

Object.prototype.myBind = function(fn) {
  if(!fn){
    fn = typeof window === "undefined" ? global : window
  }
  let arges = [...arguments].slice(1)
  // 提前拿到this，防止this改变
  let that = this
  const F = function (){
    let args = [...arguments]
    if(this instanceof F) {
      return that.call(this,...arges,...args )
    }
    return that.call(fn,...arges,...args )
  }
  // 维护原型
  if(this.prototype) {
    F.prototype = this.prototype
  }
  return F
}

const a = {
  name: "jake",
  age: 15,
  skill: ["swimming","basketball"]
}
name = "hello"

function b(a,b){
  let name = "mike"
  console.log(a,b)
  return this.name
}
function B(name,age){
  this.name = name
  this.age = age
}
B.prototype.show = function(){
  console.log(this.name, this.age)
}
let c = B.myBind(null, "mini")
let d = new c(19)
d.show()
console.log(d)