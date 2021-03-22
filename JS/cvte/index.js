// 1、
// var ctx = {
//   _val: 30
// }
// var _val = 10;
// function rootFn() {
//   console.log(this._val);
//   this._val = 20;
//   function childFn() {
//     console.log(this._val);
//   }
//   return childFn;
// }

// rootFn.apply(ctx)();
// console.log(ctx._val); // 30 10 20

// 2、
// let x = 100;
// let y = 200;
// let funA = function(x) {
//   x += 1;
//   let y = 201;
//   let funB = function() {
//     console.log(x);
//     console.log(y);
//   }
//   return funB;
// }
// let f = funA(101);
// f(); //102 201

// 3、
function A() {
  this.value = 456;
  this.getValue = function() {
    console.log(this.value);
  }
}
function B(value) {
  if(value) {
    this.value = value;
  }
}
const a = new A();
const a2 = new A();
B.prototype = a2;
const b = new B(789);
const b2 = new B();
a2.value = 123;
a.getValue(); //456
a2.getValue();//123
b.getValue();//789
b2.getValue();//123