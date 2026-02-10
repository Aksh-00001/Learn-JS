// singleton
// objects.create

// objects literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "aksh",
    age: 21,
    "full name": "aksh raj", //----> this value cant be accessed using 
                              //console.log(JsUser.email) thats why we used 
                              // console.log(JsUser["email"])
    location: "noida",
    email: "aksh@gmail.com",
    isLoggedin: false,
    lastLoggin: ["Monday" , "Saturday"],
    [mySym]: "key1" // this is how we use the symbol or declare it in an object 
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "akshraj@gmail.com" //  to change the value of the key 
// Object.freeze(JsUser) // this will freeze or lock the key values  

JsUser.greeting = function(){   //  this is how we add a funtion
    console.log("hello js users")
}
JsUser.greeting2 = function(){   
    console.log(`hello js users , ${this.name}`) // this is how we do string interpolation
                                                  // this. is used to referance the same object 
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());