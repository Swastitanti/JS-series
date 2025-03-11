function one(){
    const username = "swasti"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // error
    
    two() // error
}
one() // error


if (true) {
    const username = "sanu"
    if (username == "sanu") {
        const website = "youtube"
        console.log(username + " "+website); // o/p :- sanu youtube
    } 
    console.log(website); // error
}
console.log(username); // error


// the chlid function can access the parent elements but parent cannot access the child elements similarly in if case also


// here only declare a function
console.log(addone(5)); // o/p :- 6
function addone(num){
    return num + 1
}


console.log(addTwo(5)); //we get error because here we declare a function as well as hold in an variable
const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5)); // o/p :- 7

// declaration of a fucntion matters... that how we declare a function whether hold in a variable or simply declare a function

