/// Arrays

const myArr = [0,1,2,3,4,5]

const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[5])

// Array Methods

// myArr.push(6,7,8)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(11)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(5))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)
// console.log(newArr)



// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,4)
console.log("C", myArr)
console.log(myn2)