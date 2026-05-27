let score = "33aa"

console.log (typeof score);

let valueInNumber = Number(score) //Number changes the value in numbers
console.log(typeof valueInNumber); // output :- number
console.log(valueInNumber) // output :- NaN means not a number since 33aa is not a number


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = "aksh"

let booleanIsLoggedIn = Boolean(isLoggedIn) // changes the variable value to boolean
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false 
// "hitesh" => true

let someNumber = 33

let stringnumber = String(someNumber) // converts the variable to string
console.log(stringnumber)
console.log(typeof stringnumber) 


// node Basics/conversionOperations.js


//****************************************operations******************************** */

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%2);

let str1 = "hello"
let str2 = " aksh"

let str3 = str1+str2
console.log(str3); 


let gameCounter = 100
gameCounter++; // increments by 1 
console.log(gameCounter); 