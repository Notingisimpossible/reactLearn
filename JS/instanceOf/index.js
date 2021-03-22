// instanceOf实现原理
let a = {}
let b = '12'
// console.log(a instanceof Object)
// console.log(b instanceof String)

function myInstanceOf(o, type) {
  let res = type.prototype;
  if(typeof o !== 'object' || typeof o !== 'function') {
    return false;
  }
  while(o.__proto__ !== null) {
    if(o.__proto__ === res) return true;
    o = o.__proto__;
  }
  return false;
}
const k = function (){};
var m = null;
console.log(myInstanceOf(m, Object))