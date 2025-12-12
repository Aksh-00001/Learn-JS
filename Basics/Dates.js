//Dates 

// Date is an object  

let myDate = new Date() 
console.log(myDate.toString()) 
console.log(myDate.toDateString()) 
console.log(myDate.toLocaleString()) 

let myCreatedDate = new Date(2025 ,0, 23)// month starts from 0 in javascript  
let myCreatedDate2 = new Date(2025 ,0, 23, 5, 3)  
 
console.log(myCreatedDate.toDateString()) 
console.log(myCreatedDate2.toLocaleString()) 


let myTimestamp = Date.now()  
console.log(myTimestamp)  
console.log(myCreatedDate.getTime()) // to get value from a particualar date time in millisecond
console.log(Math.floor(Date.now()/1000)) // in second

let newDate = new Date()
console.log (newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
    weekday: "long"
    
})