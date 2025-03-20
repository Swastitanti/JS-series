// object literals

const user = {
    username: "Swasti",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from Database");
        console.log(`username: ${this.username}`); // this keyword use when we want our current function element
        console.log(this); // we all the values present in tis function
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // in global context we get empty object



// constructor function

const promiseOne = new Promise()
const date = new Date()
// new is a constructor function with use one object to construct multiple instances

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.console = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = funtion (){
        console.log(`welcome ${this.username}`);
    }

    return this

}

const userOne = new user("swasti", 12, true)
const userTwo = new user("kumari", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
// constructor function helps in avoid overriding
/*
When a this function
=> a new object is created
=> construction function call due to new key word and it pack all the argument and give it back to function 
=> all the packed arguments are inject into the this keyword
=> at last we get our all arguments in the function
*/