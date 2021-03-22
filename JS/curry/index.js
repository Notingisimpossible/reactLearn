// 给你一个函数some(1)(2)(3)最后得到结果6，怎么实现？
const some = (...args) => {
  res.toString = function() {
    let result = args.reduce((lastItem, item) => lastItem + item)
    return result;
  }
  function res(...params) {
    return some(...args, ...params);
  }
  return res;
}

let r = some(1)(2)(3)
console.log(r);