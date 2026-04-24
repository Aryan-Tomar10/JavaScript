const arr = [1,2,3]

// const total = arr.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc+currval
// },10)

// const myTotal = arr.reduce((acc,currval) => acc+currval,0)

// console.log(myTotal);


const shoppingCard = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "react course",
        price : 999
    },
    {
        itemName : "python course",
        price : 699
    }
]

// const total=shoppingCard.map((sc)=>sc.price).reduce((acc,currval)=>acc+currval,0)

const total = shoppingCard.reduce((acc,sc)=>acc+sc.price,0)

console.log(total);