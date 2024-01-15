// Date

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.getMonth())
// console.log(typeof myDate)


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 8, 5, 55)
// We can also declare in DD/MM/YYYY or YYYY/MM/DD format
// let myCreatedDate = new Date("2023-01-25")
let myCreatedDate = new Date("2017-10-25")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getHours())

// `${newDate} and in minutes is ${newDate.getMinutes}`

newDate.toLocaleString('default',{
    weekday: "long"
})