// if

// condition is true or false
if (true) {
    // code execute
    console.log("executed"); // o/p :- executed
}
if (false) {
    // code not execute
}

// <, >, <=, >=, ==, !=, ===, !==


// is and else
const temperature = 41

if (temperature === 41){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}


const score = 200
if (score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}


// implecite scope
const balance = 1000
// not good practice
if (balance > 500) console.log("test1"),
console.log("test2");
;



// if else-if 

const price = 1000
if (price < 500){
    console.log("less than 500");
} else if (price < 750){
    console.log("less than 750");
}else {
    console.log("less than 1200");   
}
