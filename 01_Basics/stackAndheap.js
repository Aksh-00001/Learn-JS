// memory in js is of two types 

//stack (primitive) and heap (non-primitive)

let youtubeName ="akshraj.com"

let anotherName = youtubeName
anotherName = "rishu"

console.log(youtubeName)
console.log(anotherName)

let userOne ={
    email: "akshrajsingh99310@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "akshrajsingh@gmail.com"

cosole.log(userOne.email)
cosole.log(userTwo.email)

// node Basics/stackAndheap.js