// constructor make singleton value but literals donot make singleton value

// objects constructor 
// Object.create()

// objects literals it declare in curly braces

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    // key: value
    name: "swasti",
    age: 22,
    "full name": "swasti kumari",
    mySym: "mykey1",
    // symbols are declare in square bracket
    [mySym2]: "mykey2",
    location: "Ranchi",
    email: "swastitanti123@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monaday", "Friday"]
}

// ways to access values
console.log(JsUser.email); // o/p :- swastitanti123@google.com
console.log(JsUser["email"]); // o/p :- swastitanti123@google.com
console.log(JsUser["full name"]); // o/p :- swasti kumari
console.log(typeof JsUser[mySym]); // o/p :- undefined
console.log(JsUser[mySym2]); // o/p :- mykey2
console.log(typeof JsUser[mySym2]); // o/p :- string

// change the value 
JsUser.email = "swastikumari123@google.com"
// freeze make object unchangeable we cannot chnage the values
Object.freeze(JsUser)
console.log(JsUser);


// make function
JsUser.greeting = function(){
    console.log("Hello JS users"); // o/p :- Hello JS usrs
}

console.log(JsUser.greeting()); // o/p :- undefined

JsUser.greetingTwo = function(){
    // refrence a value
    console.log(`Hello Js user, ${this.name}`); // o/p :- Hello Js user, swasti
}
console.log(JsUser.greetingTwo()); // o/p :- undefined
