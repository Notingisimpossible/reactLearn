function Person(name, age, like) {
  this.name = name;
  this.age = age;
  this.like = like;
}

function myNew (obj,...args) {
  let result = {};
  result.__proto__ = obj.prototype;
  let r = obj.call(result, ...args);
  if(typeof r === 'object') {
    return r
  }
  return result;
}
// const me = new Person('jake', 18);
const me = myNew(Person, 'jake', 18)
me.name = 'mike';
console.log(me);
// 1、新建一个对象
// 2、让对象的__proto__指向被new的对象的原型
// 3、将被new的对象的this指向到新创建的对象
// 4、判断被new的函数返回值是否是一个对象，是对象就返回它的返回值，否则返回新创建的对象