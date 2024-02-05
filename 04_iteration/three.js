// for off

const arr = [1,2,3,4,5,6,7,8]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World"

for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State Of America")
map.set('Fr', "France")

//console.log(map)

// for (const key of map) {
//     console.log(key);
// }
for (const [key, val] of map) {
    console.log(key,':-', val);
}

const myObject = {
    'game1': "NFS"
    'game2': "Spider"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }