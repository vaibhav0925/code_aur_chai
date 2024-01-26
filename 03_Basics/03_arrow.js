const user = {
    username : "Vaibhav",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username},welcome to this website`)
        //console.log(this)
    }
}


//user.welcomeMessage()
//user.username = "Sham"
//user.welcomeMessage()

//console.log(this);

function chai() {
    let username = "Vaibhav"
    //console.log(this.username)
}

chai()


// so this is working in only in objects not in functions

// const Amit = function () {
//     let username = "Vaibhav"
//     console.log(this.username)
// }


// Arrow function
const Amit = () => {
    let username = "Vaibhav"
    console.log(this)
}

//Amit()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2
// above one is called implecent return

// const addTwo = (num1, num2) =>  (num1 + num2)
//const addTwo = (num1, num2) =>  ({username : "Vaibhav"})
console.log(addTwo(5,8))