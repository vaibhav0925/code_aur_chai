// singleton 
// (This is also called constructor methods)

//Object.create

//Object literals

const mySym = Symbol("key1")

const JSUser = {
    name : "Vaibhav",
    "full_name" : "Vaibhav Shukla",
    age : 18,
    location : "Varanasi",
    [mySym] : "myKey1",
    email : "vaibhav@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Saturday", "Monday"]
    
}

//console.log(JSUser.email)
//console.log(JSUser.full_name)
//console.log(JSUser["full_name"]) 
//console.log(JSUser[mySym])

JSUser.email = "vaibhav@openai.com"
//Object.freeze(JSUser)
JSUser.email = "vaibhav@microsoft.com"
//console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello JS user")
}

JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo())