// for of
// ["", "", ""] (string inside array)
// [{}, {}, {}] (objects inside array)

const arr = [1, 2, 3, 4, 5]
// here it iterate over objects(arr)
for (const num of arr) {
    console.log(num);
}
/*output
1
2
3
4
5
*/


const greeting = "Hello world!"

for (const greet of greeting){
    console.log(`Each char is ${greet}`);
}
/*output
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/


// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);
/*output
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

/*
=> Map is an objects
=> it use keys values eg. 'IN'= key, "India" = value
=> it only contain unique values
*/


// loop on map

for (const key of map){
    console.log(key);
}
/*output
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/


// if we don't want to print array by separating key and values
for (const [key, value] of map){
    console.log(key, ':-', value);
}
/*output
IN :- India
USA :- United States of America
Fr :- France
*/


const myObjects = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key, value] of myObjects){
    console.log(key, ':-', value);
}
/*output
TypeError: myObjects is not iterable
*/
