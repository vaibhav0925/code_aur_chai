const name = "Vaibhav"
const repoCount = 50


//console.log(name + repoCount + "Value")

//``----- String interpulation (We create place holder and directely inject any variables)
// `` --(This symbol is known as Backticks)
//This syntax is much more readable in backend development
// console.log(`Hello my name is ${name} and my repo couunt is ${repoCount}`)

const gameName = new String(`Vaibhav`)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,5)
console.log(newString)
const anotherString = gameName.slice(-5, 4)
console.log(anotherString)

const newStringOne = "    Vaibhav Raja_Ji"
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://vaibhav.com/hitesh%20choudhary"
console.log(url.replace('%20','_'))
console.log(url.includes('hitesh'))
console.log(url.includes('Raja_Ji'))
console.log(newStringOne.split('_'))