let a = 300

// {} curly braces are scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a); // o/p :- Inner: 10
    console.log(b); // o/p :- 20
}

console.log("Outer: ", a); // o/p :- Outer:  300


// console.log(a); // here this give it should not be print outside the scope because a is define inside the scope
// console.log(b); // same error as a
// console.log(c); // here it print 30  and this create the problem therefore we generally don't use var similarly if don't declare any variable


/*
=> the value which is written outside the scope is global scope 
=> the value which is written in the global scope can be assign inside the block scope 
=> the value wich is written inside the scope is block scope or local scope
=> the value which is written inside the block scope is not assigned outside the scope
*/

/*
=> when we check the global scope in browser inspect and when we check global scope in our code environment they both are different
*/