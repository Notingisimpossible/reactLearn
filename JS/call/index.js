let boy = {
  name: 'jake',
  age: 18,
  like: ['footBall', 'baseBall']
}

function person(name) {
  console.log('这个男孩的名字是', name, '今年', this.age, '岁', '喜欢', this.like);
}

// person.apply(boy, ['mike']);

// call实现 
Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') {
    throw new Error('Type Error');
  }
  context = context || window;
  if(typeof context !== 'object') {
    switch(typeof context) {
      case 'number': 
        context = new Number(context);
        break;
      case 'string':
        context = new String(context);
        break;
      case 'boolean':
        context = new Boolean(context);
      // 省略
      default:
        break;
    }
  }else {
    context = context || window;
  }
  context.fn = this;
  if([...arguments].length > 1) {
    return context.fn([...arguments].slice(1));
  } else {
    return  context.fn();
  }
}
person.myApply(boy, 'mike');

// 1、判断context
// function a() {
//   console.log(this);
// }
// a.myApply('123')