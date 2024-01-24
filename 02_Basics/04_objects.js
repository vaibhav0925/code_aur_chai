//const tinderUser = new Object()
// (Above one is singleton object)

const tinderUser = {} // THis one is non singleton object

tinderUser.id = "abc@123"
tinderUser.name = "Sham"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "sham@gamil.com",
    fullName : {
        userfullName : {
            firstName : "Vaibhav",
            lastName : "Shukla"
        }
    }
}
//console.log(regularUser.fullName.userfullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "c"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3)


const users = [
    {
        id : 1,
        email: "vai@hotmail.com"
    }
]
//users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))