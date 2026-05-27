const accountId = 144553  // can't be changed. 
let accountEmail = "askhrajsingh99310@gmail.com" // can be changed. 
var accountPassword = "12345" // can be changed.
accountCity = "jaipur" // can be changed. --- this also a way to declaring the variabel but do not use this method.
let accountState ; // if we do not assign any value to the variables it counts as undefined.
// semicolon dosen't matter in JS.
// variabels in JS cab be declared using -- let and var .

/*
 prefer not to use var
 becouse of the issue in block scope and functional scope. 

 always use let for variable 
 and const for constant.  
 */

accountEmail = "rishurajsingh@gmail.com"
accountPassword = "34523534"
accountCity = "godda"


console.log("accountId") // prints the output.
// using console.table() we can print multipe outputs in table format.
console.table ([accountEmail , accountPassword , accountCity, accountState]) 
