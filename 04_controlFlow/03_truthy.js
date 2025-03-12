const userEmail = "swasti12@gmail.com"

if (userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy values

/*
=> flase
=> 0
=> -0
=> BigInt
=> ""
=> null
=> undefined
=> NaN
=> 0n
*/


// truthy value

/*
every other value is truthy value
=> "0" in string 0 is truthy
=> 'false'
=> " "
=> []
=> {}
=> function(){}
*/

const userMail = ""

if(userMail.length === 0){
    console.log("Array is empty"); // o/p :- Array is empty
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); // o/p :- Object is empty
}

// Nullish Coalescing Operator (??): it works only on null and undefine

let val1 = 5 ?? 10 
let val2 = null ?? 10
let var3 = undefined ?? 15
let var4 = null ?? 10 ?? 15 // here which is the first value it get it assign to that variable
console.log(val1); // o/p :- 5
console.log(val2); // o/p :- 10 
console.log(var3); // o/p :- 15
console.log(var4); // o/p :- 10


// Terniary Operators (?)
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80"); // o/p :- More than 80

