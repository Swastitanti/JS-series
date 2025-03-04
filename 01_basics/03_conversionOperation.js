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

// ******************** Operstions ********************

let value = 3
let negValue = -value 
// console.log(negValue);

console.log(2 + 2); // addition
console.log(2 - 2); // subtraction
console.log(2 * 2); // multiplication
console.log(2 ** 3); // 2 to power 3 
console.log(4/2); // division
console.log(4 % 2); // modulo


let str1 = "hello"
let str2 = " swasti"

let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2); // o/p :- 12
console.log(1 + "2"); // o/p :- 12
console.log("1" + 2 + 2); // o/p :- 122
console.log(1 + 2 + "2"); // o/p :- 32


console.log(true); // o/p :- true
console.log(+true); // o/p :- 1
console.log(+""); // o/p :- 0

let gameCounter = 100 
gameCounter++; //postfix
// ++gameCounter; //prefix
console.log(gameCounter);

// link to study :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link :- https://tc39.es/ecma262/multipage/abstract-operations.html