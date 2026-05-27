// var c = 300
let a= 100 
if (true)      // this is a block scope, and variables declared 
              // with let and const inside this block will not be accessible outside of it.
              // we use {} to create a block scope in JS.
{
  let a = 10;
const b = 20
var c = 30 
console.log("inner:",a)

}

console.log(a)
// console.log(b)
// console.log(c) // var c gave output as 30 because var is function scoped 
               // and not block scoped like let and const. So, it is accessible outside the block as well.
               // so thats why var is not recommended to use in modern JS as it can lead to bugs and unexpected behavior.



