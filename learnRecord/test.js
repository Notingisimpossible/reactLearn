// 函数柯里化
// function currery(fn) {
//   // 保留第一次调用参数
//   let arg = [].slice.call(arguments,1)

//   return function() {
//     let newArgs = [].slice.call(arguments)
//     let allArgs = arg.concat(newArgs)
//     if(arguments.length === 0) {
//       return fn.apply(null, allArgs)
//     }
//     return currery.call(null, fn, ...allArgs)
//   }
// }
// function add() {
//   let ad = [...arguments]
//   let sum = 0
//   ad.map(item => sum = sum + item)
//   console.log(sum)
// }

// let add1 = currery(add,1)
// add1(2, 3)(4,5,6)()

// function currery(fn) {
//   let args = [].slice.call(arguments,1)
//   return function() {
//     let newArgs = [].slice.call(arguments)
//     let allArgs = args.concat(newArgs)
//     if(arguments.length === 0) {
//       return fn.apply(null, allArgs)
//     }
//     return currery.call(null,fn, ...allArgs)
//   }
// }

// function add (a,b,c) {
//   return a + b +c
// }

// let add1 = currery(add,1)
// console.log(add1(9,8)())//18
// console.log(add1(2)(3)(4)())
// Array.map((item, index, arr) => {

// })
// Array.prototype.myMap = function(fn) {
//   let result = []
//   for(let i=0; i < this.length; i++) {
//     let item = this[i]
//     let index = i
//     result.push(fn(item, index, this))
//   }
//   return result
// }

// let arr = ['I','LOVE','JS']
// let k = arr.myMap((item, index, arr) => {
//   console.log(arr)
//   console.log(item)
//   return item+"1"
// })
// console.log(k)
// var array1=Array(3);
// array1[0]=2;
// var result=array1.map((item) => {
//   console.log(item)
//   return "1"
// });
// console.log(result);

// var setPerson = function (person) {
//   let k = person
//   person.name = "kevin";
//   person = { name: "nick" };
//   console.log(person.name)
// };
// const person = { name: "alan" };
// setPerson(person);
// console.log(person);

// for(var i={j:0};i.j<5;i.j++){
//   (function(i){
//   setTimeout(function(){console.log(i.j)},0);
//   })(i);
//   }
// function f1(){}

// console.log(typeof f1.prototype,
//   typeof Object.prototype,
//   typeof Function.prototype.prototype,
//   typeof f1.prototype.constructor)

// function Verhical(w){
//   this.w = w;
// }
// Verhical.prototype.getW = function(m){
//   this.w = m
// }

// function Bicycle(w){this.w = w;}
// Bicycle.prototype =  Verhical.prototype;//new Vehical(),new Vehical(2),new Vehical(4)都可以，括号里是什么没关系


// var bicycle = new Bicycle(2);
// var k = new Bicycle(5)

// console.log(bicycle.getW(3));//输出为2

// console.log(k.w)

// 时间绝对优先级
setTimeout(()=>{
  console.log(1)
},100)
setTimeout(()=>{
  console.log(2)
},99)
console.log(3)