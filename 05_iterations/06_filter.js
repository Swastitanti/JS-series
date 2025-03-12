const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item
})
/*output
js
ruby
java
python
cpp
*/
console.log(values);// o/P :- undefined (because forEach don't return anything)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4
)
console.log(newNums); // o/p :- [ 5, 6, 7, 8, 9, 10 ] (filter return some values but in filter we have to give conditions)


const newNum = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNum); // o/p :- [ 5, 6, 7, 8, 9, 10 ] (when we use scopes we have to write return to get output otherwise it return empty array)


const new_nums = []
myNums.forEach( (num) => {
    if (num > 4) {
        new_nums.push(num)
    }
} )
console.log(new_nums); // o/p :- [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
/*output
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/
