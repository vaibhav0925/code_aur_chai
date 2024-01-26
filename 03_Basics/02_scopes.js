//var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30 //weather you would declare var or not problem would be there 
    //[Simply you just declare without var c = 30 result would be same]
    //console.log("INNER: ", a)
}  // This is called Block scope or global scope



//console.log(a)
//console.log(b)
//console.log(c)



function One(){
    const username = "Vaibhav"

    function Two(){
        const website = "Youtube"
        //console.log(username)
    }
    //console.log(website)

    Two()
}
One()

if (true) {
    const username = "Vaibhav"
    if(username === "Vaibhav"){
        const website = " Youtube"
        //console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)


// ++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}

addOne(5)

// Below one sometimes it is also called expresion   this is one type of variable  and it can hold any value
// here it has holded with variable
const addTwo = function (num) {
    return num + 2
}

addTwo(5)