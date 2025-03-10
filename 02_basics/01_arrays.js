// Array

/* in js array can be mixed of datatype
it is resizable
indexing start from 0
*/ 
const myArr = [0, 1, 2, 3, 4, true, "swasti"]
const myHeros = ["shaktiman", "maagraj"]
console.log(myArr[6]); // o/p :- swasti


// Array methods

// Push add value to the array
myArr.push(6)
console.log(myArr); // o/p :- [ 0, 1, 2, 3, 4, true, 'swasti', 6 ] 

// pop remove value from the emd of the array
const myArr2 = new Array(1, 2, 3, 4, 5)
myArr2.pop()
console.log(myArr2); // o/p :- [ 1, 2, 3, 4 ]

// unshift add value to the start
myArr2.unshift(9)
console.log(myArr2); // o/p :- [ 9, 1, 2, 3, 4 ]

// shift remove value from the start
myArr2.shift()
console.log(myArr2); // o/p :- [ 1, 2, 3, 4 ]

// include give boolean result
console.log(myArr2.includes(9)); // o/p :- false

// indexOf give the index the value
console.log(myArr.indexOf(3)); // o/p :- 3

// join give the same value separated by comma but change the type
const newArr = myArr.join()
console.log(myArr); // o/p :- [ 0, 1, 2, 3, 4, true, 'swasti', 6]
console.log(newArr); // o/p :- 0,1,2,3,4,true,swasti,6
console.log(typeof newArr); // o/p :- string


// slice, splice
console.log("A ", myArr); // o/p :- A [ 0, 1, 2, 3, 4, true, 'swasti', 6 ]

// slice give all the value within the given range
const myn1 = myArr.slice(1, 3)
console.log(myn1); // o/p :- [ 1, 2 ]
console.log("B ", myArr); // o/p :- B [ 0, 1, 2, 3, 4, true, 'swasti', 6 ]

// splice manipulate the original array and give the value which is manipulatated from the array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // o/p :- C [ 0, 4, true, 'swasti', 6 ]
console.log(myn2); // o/p :- [ 1, 2, 3 ]




