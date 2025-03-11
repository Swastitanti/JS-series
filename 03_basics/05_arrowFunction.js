const user = {
    username: "swasti",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage() // o/p :- swasti, welcome to website
user.username = "sanu"
user.welcomeMessage() // o/p :- sanu, welcome to website
console.log(this); // this give empty object {}

function chai(){
    let username = "swasti"
    console.log(this); // now it give some golbal value 
    console.log(this.username); // o/p :- undefined
}
chai() 

const chai = function () {
    let username = "swasti"
    console.log(this.username); // o/p :- undefined
}
chai()

const chai = () => {
    let username = "swasti"
    console.log(this); // empty object {}
}
chai()


// ******************* Arrow function ******************* 

// declaration 
// () => {}

// basic arrow function
const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3, 4)); // o/p :- 7

// implicite return
const add_two = (num1, num2) => num1 + num2 
console.log(add_two(4, 5)); // o/p :- 9


// if we use () this bracket we don't have to use return if we use {} this bracket we have to use return
const Add_two = (num1, num2) => (num1 + num2)
console.log(Add_two(5, 4)); // o/p :- 9


/* 
=> this give the current context of the function
=> this will give the empty object if don't declare any context in the global environment
=> when we print this in our particular js environment where we run our js program (nodeJs) it will give the empty set
=> when we print this in browser it will give the browser engine name that runs the JS program 
=> we cannot use this directly in the console.log()
*/