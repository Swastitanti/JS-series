const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    
    return accumulator + currentValue
}, 0)
console.log(myTotal);
/*output
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/


const my_Total = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(my_Total); // o/p :- 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "cpp course",
        price: 3999
    },
    {
        itemName: "Python course",
        price: 4999
    },
    {
        itemName: "Dev course",
        price: 2999
    },
    {
        itemName: "Data Science course",
        price: 12999
    }
];

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay); // o/p :- 27995
