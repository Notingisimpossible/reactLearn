Object.flatten = function(obj){
  var result = {};

  function recurse(src, prop) {
      var toString = Object.prototype.toString;
      if (toString.call(src) == '[object Object]') {
          var isEmpty = true;
          for (var p in src) {
              isEmpty = false;
              recurse(src[p], prop ? prop + '.' + p : p)
          }
          if (isEmpty && prop) {
              result[prop] = {};
          }
      } else if (toString.call(src) == '[object Array]') {
          var len = src.length;
          if (len > 0) {
              src.forEach(function (item, index) {
                  recurse(item, prop ? prop + '.[' + index + ']' : index);
              })
          } else {
              result[prop] = [];
          }
      } else {
          result[prop] = src;
      }
  }
  recurse(obj,'');

  return result;
}

let obj = {
  name: 'Jim',
  age: 18,
  address: '浙江',
  like: '形意拳',
  children: [
    {
      father: 'aj',
      mother: 'ak',
    },
  ],
}

console.log(Object.flatten(obj))