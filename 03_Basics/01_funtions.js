/*   It means you have close certain code into pacakage and you can use it copy at anywhere for multiple time */

function SayMyName(){
    console.log("V")
    console.log("A")
    console.log("I")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("V")
}

//SayMyName()

// function AdditionOfTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function AdditionOfTwoNumber(number1, number2){
    //let result = number1 + number2
    //console.log("Vaibhav")
    //return result /// After return code will stop executing
    //console.log("Vaibhav")
    return number1 + number2
}

//AdditionOfTwoNumber(6, 5)
const result = AdditionOfTwoNumber(6,5)
//console.log("Result", result)

function logInUserMessage(username){
    if(!username)//or if(username === undefined)
    {
        console.log("Please Enter Your Username")
        return
    }
    return `Welcome Back, ${username} `
} 

//console.log(logInUserMessage("Vaibhav"))
//console.log(logInUserMessage())

//function calculateCartPrice(...num1){
    //  return num1
//}

function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 1000))

const user = {
    username : "Vaibhav",
    price : 199
}

function HandleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//HandleObject(user)
HandleObject({
    username : "Sham",
    price : 599
})

const myNewArray = [200,400,500,800]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,500,600,800]))