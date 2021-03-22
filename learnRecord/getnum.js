// function getNum(){
//   let numLen = Math.ceil(Math.random(1)*3)
//   let alphaLen = Math.ceil(Math.random(1)*3)
//   let otherLen = 8 - numLen - alphaLen
//   let result = ""
//   for(let i=0; i<alphaLen; i++) {
//     let alphaFlag = Math.ceil(Math.random()*63)
//     result = result + letter[alphaFlag]
//   }
//   for(let i=0; i<numLen; i++) {
//     let numFlag = Math.ceil(Math.random()*9)
//     result = result + number[numFlag]
//   }
//   for(let i = 0; i<otherLen; i++){
//     let otherFlag = Math.ceil(Math.random()*17)
//     result = result + mark[otherFlag]
//   }
//   return result
// }
// getNum()

var length = 10


function fn() {
  console.log(this.length)
}
var obj = {
  length: 5,
  method: function(fn) {
    fn()
    arguments[0]()
  }
}
obj.method(fn,1)