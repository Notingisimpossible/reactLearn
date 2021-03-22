// var a = 5
// function test(){
//   a = 0
//   console.log(a)
//   console.log(this.a)
//   var a
//   console.log(a)
// }
// new test()

// String.prototype.GetNumber = function(){
//   var regEx = /[^\d]/g
//   return this.replace(regEx,'')
// }

// var str = "a1b2c3"
// str = str.GetNumber()
// console.log(str)


// function greetingMaker(greeting) {
//   function addName(name) {
//     greeting = greeting.split(' ').reverse().join("-")
//     return greeting + " " + name
//   }
//   return addName
// }

// var daytimeGreeting = greetingMaker("Good Day to you")
// console.log(daytimeGreeting(name))

// function showCase(value) {
//   switch (value) {
//     case 'A':
//       console.log("A")
//       break
//     case 'B':
//       console.log("B")
//       break
//     case undefined:
//       console.log("undefined")
//       break
//     default:
//       console.log("default")
//   }
// }

// showCase(String('A'))

const student = {
  name: "zahngshan"
}
Object.defineProperty(student,'age',{
  value:22,
  enumerable: true
})
console.log(student)
console.log(Object.keys(student))