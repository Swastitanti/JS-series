function calculateCartPrice(num1){
    return num1 
}
console.log(calculateCartPrice(30)); // o/p :- 30

// if we want pass various arguments
// we use (...)rest operator 
function calculateCart(...num1){
    return num1 
}
console.log(calculateCart(200, 300, 400)); // o/p :- [ 200, 300, 400 ]


function calculate_Cart(val1, val2, ...num1){
    return num1 
}
// here 200 and 300 values goes to val1 and val2
console.log(calculate_Cart(200, 300, 400, 500, 2000)); // o/p :- [ 400, 500, 2000 ]


const user = {
    username: "swasti",
    price: 199
}

function handleOblject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleOblject(user) // o/p :- username is swasti and price is 199

// another way
handleOblject({
    username: "swasti",
    price: 399
}) // o/p :- username is swasti and price is 399


const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray)); // o/p :- 500
console.log(returnSecondValue([300, 400, 700, 800, 900])); // o/p :- 800
