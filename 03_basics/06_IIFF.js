// immediately Invoked Function Expressions (IIFE)

// first () is for declare a function and second () is for execution
(function one(){
    console.log(`DB connected`);
})();

// another way
( () => {
    console.log(`DB connected to`);
} )();

((name) => {
    console.log(`DB connected to ${name}`);
})("swasti");



/* 
=> to end the recent invoked IIFE function we have to use ";"
=> problem created by global scope pollution so IIFE is use to remove the global scope problem from the declared variable 
*/