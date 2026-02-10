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
