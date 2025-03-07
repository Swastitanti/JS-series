const name =  "swasti"
const repoCount = 50 

// concatinate a string
// console.log(name + repoCount + " value");

// another way to concatinate the string using backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('swasti-Kumari')

// to find index charachter of a particular index
console.log(gameName[0]);

// to find protoType of the string
console.log(gameName.__proto__);

// find length of string
console.log(gameName.length);

// convert string to uppercase
console.log(gameName.toUpperCase());

// to get the charachter at that index
console.log(gameName.charAt(3));

// to get the index of that charchter
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 5)
// convert string into substring
console.log(newString);

// if we start the string from negetive value it will start for the end
const anotherString = gameName.slice(0, 5)
console.log(anotherString);

const newStringOne = "    swasti    " 
console.log(newStringOne);
// it remove the starting and end spaces
console.log(newStringOne.trim());

const url = "https://swasti.com/swasti%22kumari"
// it replace the value and change it to the given value
url.replace('%22', '-')

// it check wheather the value is present in the string or not
console.log(url.includes('tanti'));


const newStringTwo = 'swasti-kumari-dot-com' 
// it split the string on the basis of some value
console.log(newStringTwo.split('-'));

