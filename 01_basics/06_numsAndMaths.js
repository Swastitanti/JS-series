const score = 400
console.log(score); // o/p :- 400

const balance = new Number(100)
console.log(balance); // o/p :- [Number: 100]

console.log(balance.toString().length); // o/p :- 3
// number of decimal use "toFixed"
console.log(balance.toFixed(2)); // o/p :- 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // o/p :- 124 (round of value)
console.log(otherNumber.toPrecision(4)); // o/p :- 123.9

const hundereds = 100000
// convert it into us standard means separated by comma","
console.log(hundereds.toLocaleString()); // o/p :- 100,000
// convert it into indian standard 
console.log(hundereds.toLocaleString('en-IN')); // o/p :- 1,00,000


// ********************** Maths **********************
console.log(Math); // o/p :- Objects [Math] {}

// absolute values (change the sign)
console.log(Math.abs(-4)); // o/p :- 4

// round of value
console.log(Math.round(4.6)); // o/p :- 5

// choose top value
console.log(Math.ceil(4.6)); // o/p :- 5

// down value
console.log(Math.floor(4.6)); // o/p :- 4

// minimum value
console.log(Math.min(4, 3, 6, 8)); // o/p :- 3

// maximum value
console.log(Math.max(4, 3, 6, 8)); // o/p :- 8


// random value
console.log(Math.random()); // o/p :- 0.47254505917446177
// for avoiding 0 we use pluse 1
console.log((Math.random() * 10) + 1); // o/p :- 7.132812509626158
console.log(Math.floor(Math.random()*10) + 1); // o/p :- 5

// random value always comes under the range of 0-1

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // o/p :- 19

// here (max - min + 1) is used to get the value between the given range and pluse one is to avoid 0 value before decimal 
