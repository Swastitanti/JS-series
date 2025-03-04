const accountId = 144553 
let accountEmail = "swasti123@gmail.com"

// generally we don't use var in js
var accountPassward = "12345"

// we cannot used this way to declare the variable
accountCity = "Jaipur "

// if we don't declare the value to the variable than it simply give undefined as a output
let accountState;

/* 
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassward, accountCity])
console.log(accountState)