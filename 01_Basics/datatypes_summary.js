/*  JavaScript is a inheretly dynamic Type language
 In JavaScript data is identefied in only two category 
    1. Premitive
    2. Non Premitive or refence Type
   It is based upon How data is stored in memory and How would you able to fetch it.
 There are 7 types of Premitive data types 
   name are String, Number, Boolean, null, undefined, Symbool, BigInt

    Reference Type (Non Premitive) data types are usually you get reference of memory
    name are Array, Objects, Functions  
    Array stored in squared bracket []
    Object stored in curly bracess {} it could be stored any data type
*/

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const OutsideTemp = null
let useEmail;

const id = Symbol("123")
const id1 = Symbol("123")

// console.log(id === id1)

const BigNumber = 46266222693662563n

// console.log(typeof BigNumber)

// Array,Objects,Functions
const hero = ["shaktiman","nagraj","doga"]
let myobj = {
    name: "Vaibhav_Raja_Ji",
    age: 22,
}
const myFunction = function(){
    console.log("Hello Raja_Ji")
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* Types of memory 
    1. Stack Memory (Premitive)
    2. Heap Memory (Non - Premitive)
*/ 

let My_name = "Vaibhav"
let another_name = My_name

console.log(another_name)

another_name = "Raja_Ji"

console.log(another_name)

let userOne = {
    user_name : "vaibhav@gmail.com",
    upi_id: "userone@ybl"
}

let userTwo = userOne
userTwo.user_name ="raja_ji@gmail.com"
console.log(userOne.user_name)
console.log(userTwo.user_name)

