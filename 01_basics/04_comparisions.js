console.log(2 > 1); // o/p :- true
console.log(2 >= 1); // o/p :- true
console.log(2 < 1); // o/p :- false
console.log(2 == 1); // o/p :- false
console.log(2 != 1); // o/p :- true

/* whenever we compare any values make sure that their datatype will be same */

console.log("2" > 1); //wrong way to compare

console.log(null > 0); // o/p :- false
console.log(null == 0); // o/p :- false
console.log(null >= 0); // o/p :- true

/* The reason is that an equality check == and comparisons > < >= <= work diffrently.
comparisions convert null to number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false
*/


// similarly undefined it gives false if compare with some value but generally we avoid this type of comparision
console.log(undefined == 0); // o/p :- false
console.log(undefined > 0); // o/p :- false
console.log(undefined < 0); // o/p :- false


// === (strictcheck) => it compare value as well as datatype
console.log("2" === 2); // o/p :- false
console.log(2 === 2); // o/p :- true
