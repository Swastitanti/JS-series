const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]
console.log(marvel_heros); // o/p :- ["Thor", "Ironman", "Spiderman"]
console.log(dc_heros); // o/p :- ["Superman", "Flash", "Batman"]

// push covert the whole array as a single value 
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // o/p :- [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ]]

// console.log(marvel_heros[3]); // o/p :- [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heros[3] [1]); // o/p :- Flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // o/p :- [ 'Thor', 'Iroman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// spread oprator used to concatnate the array in general
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // o/p :- [ 'Thor', 'Iroman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat remove the arrays inside the array and make it single array and infinity use as a depth of the array which means number of arrays are present in an array to resolve we can give any number also
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("swasti")); // o/p :- false
// from convert it into array
console.log(Array.from("swasti")); // o/p :- [ 's', 'w', 'a', 's', 't', 'i' ]
console.log(Array.from({name: "swasti"})); // o/p :- [] (empty string)

let score1 = 100
let score2 = 200
let score3 = 300

// from return new array from the set of array
console.log(Array.of(score1, score2, score3));

