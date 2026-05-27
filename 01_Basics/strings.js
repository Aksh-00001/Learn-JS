const name = "aksh"
const repoCount = 32

// console.log(name + repoCount + " value") it is less used syntex

console.log(`hello my name is ${name} and my repo count is ${repoCount} `) // better syntex
// the ${} injects the variable  


// another way for decalration of the string 
const gameName = new String("aksh-op")
console.log (gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newstring = gameName.substring(0,4) //do not obey negative value 
console.log(newstring)

const anotherString = gameName.slice(0,-4) // obeys the negative value for slicing
console.log(anotherString) 

const newStrings1 = "  aksh  "
console.log(newStrings1)
console.log(newStrings1.trim()) // trim () removes the extra space inside  the string 


const url = "https://askdh/askdhrajsingh%20singh"
console.log(url.replace("%20","_")) // repalce () performs replacement 
console.log(url.includes("aksh"))

console.log(gameName.split('_'))
