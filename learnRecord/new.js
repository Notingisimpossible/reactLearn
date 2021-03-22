// 1. 新建一个空对象
// 2. 将空对象的原型指向需要new的构造函数的原型对象
// 3. 将需要new的对象的this通过apply绑定到空对象
// 4. 判断绑定之后的返回值类型，如果是对象或者函数且不为空则返回apply绑定之后的执行结果，否则返回绑定之后的空对象
function Person(name, age) {
  this.name = name
  this.age = age
  return {
    name: this.name,
    age: this.age
  }
}
Person.prototype.changeAge = function(age){
  this.age = age
}
const myNew = function(obj) {
  let newObj = {}
  if(obj.prototype !== null){
    newObj.__proto__ = obj.prototype
  }
  let newObj1 = obj.apply(newObj,Array.prototype.slice.call(arguments,1))
  if(newObj1 != null && (typeof newObj1 === "object" || typeof newObj1 === "function")){
    return newObj1  
  }
  return newObj
}
// let p = new Person("jake", 15)
let p = myNew(Person,"jake",15)
p.changeAge(18)
console.log(p.age)