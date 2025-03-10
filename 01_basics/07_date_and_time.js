// Dates

let myDate = new Date()
console.log(myDate); // o/p :- 2025-03-10T12:05:31.134Z
console.log(myDate.toString()); // o/p :- Mon Mar 10 2025 12:05:31 GMT+0000 (Coordinated UNiversal Time)
console.log(myDate.toDateString()); // o/p :- Mon Mar 10 2025
console.log(myDate.toLocaleString()); // o/p :- 3/10/2025, 12:05:31 PM
console.log(typeof myDate); // o/p :- object

// month start from 0 in js in array
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // o/p :- Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString()); // o/p :- 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString()); // o/p :- 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
// time calculated in miliseconds
console.log(myTimeStamp); // o/p :- 174108331150
console.log(myCreatedDate2.getTime()); // o/p :- 167365400000

// convert it into seconds 
console.log(Math.floor(Date.now()/1000)); // o/p :- 1741608331


let newDate = new Date()
console.log(newDate); // o/p :- 2025-03-10T12:05:31.150Z
console.log(newDate.getMonth() + 1); // o/p :- 3
console.log(newDate.getDate()); // o/p :- 10

newDate.toLocaleString('default', {
    weekday: "long"
})
