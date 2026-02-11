// const tinderUser = new Object() // this is a singleton object 
const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false

 console.log(tinderUser)

 const regularUser = {
     email: "sam@gmail.com",
     fullanme:{
        userFullname: {
            firstanme: "aksh",
            lastname: "raj"
        }
     }
 }
 console.log(regularUser.fullanme)
 console.log(regularUser.fullanme.userFullname)
 console.log(regularUser.fullanme.userFullname.lastname)
 console.log(regularUser.fullanme?.userFullname.lastname) // the ? acts as if else


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2) // to merge two objects ----> target and source
console.log(obj3)

const obj4 = {...obj1 , ...obj2} // ... is the spread operator 
console.log(obj4)

const users =[{
    id: 1,
    email: "a@gmail.com"
},
{
    id: 2,
    email: "a@gmail.com"

},

{
    id: 3,
    email: "a@gmail.com"
},]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))