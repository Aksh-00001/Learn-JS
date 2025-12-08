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