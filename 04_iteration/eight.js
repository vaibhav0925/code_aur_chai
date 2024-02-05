//Reduce

const myNums = [1,2,3,4,5,6,7,8]

// const myTotal = myNums.reduce(function (acc, carrval) {
//     console.log(`acc: ${acc} and currval: ${carrval}`);
//     return acc + carrval
// },0)

//const myTotal = myNums.reduce( (acc, currval) => (currval+acc),0)


//console.log(myTotal);

const shoppingCart = [
    {
        item: "Javascript",
        price: 2999
    },
    {
        item: "Python",
        price: 999
    },
    {
        item: "Java",
        price: 1999
    },
    {
        item: "Data Science",
        price: 12999
    },
    {
        item: "Cyber Security",
        price: 4999
    },
]

const TotalPriceToPay = shoppingCart.reduce( (acc, item) => acc+item.price,0)
console.log(TotalPriceToPay);