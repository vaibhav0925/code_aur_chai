// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element ==5) {
        //console.log("5 is the best number");
    }
    //console.log(element)
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value is ${j} and inner loop is ${i}`);
     //console.log(i + '*' +j +'='+ i*j);   
    }

}

let myArray = ["batman", "flash", "supermar"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected");
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected");
        continue
    }
    console.log(`value of i is ${index}`);
}