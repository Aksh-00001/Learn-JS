const score = 400

const balance = new Number(100)
console.log(balance) 

console.log(balance.toString())
console.log(balance.toFixed(2)) //output = 100.00 => gives value upto specified decimal points

const otherNumbe = 23.2342
console.log(otherNumbe.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString())// gives commas between numbers (100,000)
console.log(hundreds.toLocaleString('en-IN'))// gives commas between numbers according to indian style(1,00,000)


//-----------------------------------MATHS-------------------------------------------------------

console.log(Math)
console.log(Math.abs(-4)) // abs() gives absolute value ; output = 4 (-ve to +ve only)
console.log(Math.round(4.3)) //gives round off number 
console.log(Math.ceil(4.2))// roundoff to celing value ie, bigger value 
console.log(Math.floor(4.9))// rounds off to floor value ie, lesser value
console.log(Math.min(4,5,6,3,2,)) // gives the minimum number in the array

console.log(Math.random())// gives values always between 0 and 1 
console.log(Math.random()*10)// shifted the value to the left by one decimal point
console.log((Math.random()*10)+1) // added 1 to avoide getting 0 
console.log(Math.floor(Math.random()*10)+1) //  rounds off to the floor value 
                                            // this will give me the values between 1 to 9


const min= 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

