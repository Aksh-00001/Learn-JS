// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log(null > 0) // false
console.log(null == 0) // flase 
console.log(null >= 0) // true

// the reason is that an equality check == and comparisons >, <, >=, <= works differently;
// comparisons converts null to a number treating it as 0.
// that's why null >=0 is true and null > 0 is false


// === strict check , it checks for the data type too 
console.log("2" === 2)
