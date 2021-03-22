// bind实现原理
Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  context = context || window;
  let that = this;
  let fn = function() {};
  let args = Array.prototype.slice.call(arguments, 1);

  function bound(){
    let params = Array.prototype.slice.call(arguments);
    that.apply(this.constructor === that ? this : context, args.concat(params));
  }
  fn.prototype = context.prototype;
  bound.prototype = new fn();
  return bound;
}

let me = {
  name: 'jake',  
}
const person = function() {
  console.log(this.name);
  return 'hello'
}
console.log(person.myBind(me)())