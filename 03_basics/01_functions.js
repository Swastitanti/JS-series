// function declaration
function sayMyName(){
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("I");
}

// function reference
sayMyName

// function execution 
sayMyName()


// inputs are known as parameters(number1, number2)
function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

// function call known as arguments(3, 4)
addTwoNumbers(3, 4) // o/p :- 7


function AddTwoNumbers(number1, number2){
    let result = number1 + number2 
    return result 
}
// before printing the result we have to define the return value
const result = AddTwoNumbers(5, 6)

console.log("Result: ", result); // o/p :- 11


function loginUserMessage(username){
    return `${username} just logged in`
}

// if we don't pass any value it return undefined
console.log(loginUserMessage()); // o/p :- undefined just logged in

console.log(loginUserMessage("swasti")) // o/p :- swasti just logged in


function loginUser(username){
    if (username === undefined){
        console.log("please enter your name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser()) // o/p :- Please enter your name


// if the value is undefined it print the value sam
function login(username = "sam"){
    return `${username} just logged in`
}

console.log(login()) // o/p :- sam just logged in