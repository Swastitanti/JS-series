// primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3 
const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // o/p :- false

// const bigNumber = 34523456434546n 


// Reference type (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "superman", "spiderman"];

let myObjects = {
    name: "swasti",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); // o/p :- object
console.log(typeof myFunction); // o/p:- function

// javascript is dynamically typed language 

// link :- https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator


// ************************* Memory *************************

// two type of Memories Stack (primitive) and Heap (Non-primitive)

let myName = "swastiKumari"
let anotherName = myName
anotherName = "kumariSwasti"

console.log(myName); // o/p :-  swastiKumari
console.log(anotherName); // o/p :- kumariSwasti

let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}

let userTwo = userOne 
userTwo.email = "swasti@google.com"

console.log(userOne.email); // o/p :- swasti@google.com
console.log(userTwo.email); // o/p :- swasti@google.com
