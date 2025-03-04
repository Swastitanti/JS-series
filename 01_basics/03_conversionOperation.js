let score = "33abc"
let score1 = null 
let score2 = undefined
let score3 = true

console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // o/p :- string
console.log(valueInNumber); // o/p :- NaN (not a number)
console.log(score1); // o/p :- 0
console.log(score2); // o/p :- NaN
console.log(score3); // o/p :- 1; if false than 0

let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Swasti" => true; after conversion to boolean

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);