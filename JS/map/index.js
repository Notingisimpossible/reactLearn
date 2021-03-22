// map实现原理
Array.prototype.myMap = function(callback) {
  let result = [];
  const that = this;
  this.forEach((item, index) => {
    result.push(callback(item, index, that));
  })
  return result;
}

var arr = [1,2,3]
var result = arr.myMap((item, index, arr) => {
  console.log(index,arr)
  return item*2;
})
console.log(result);