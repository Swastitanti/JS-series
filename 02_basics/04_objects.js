const tinderUser = new Object() // singleton object
const tinder_User = {} // non-singleton object

tinder_User.id = "123abc"
tinder_User.name = "swasti"
tinder_User.isLoggedIn = false 

// console.log(tinder_User); // o/p :- { id: '123abc', name:'swasti, isLoggedIn: false }

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
         userfullname: {
            firstname: "swasti",
            lastname: "kumari"
         }
    }
}

console.log(regularUser.fullname); // o/p :- { userfullname: { firstname: 'swasti', lastname: 'kumari'} }
console.log(regularUser.fullname.userfullname); // o/p :- { firstname: 'swasti, lastname: 'kumari' }
console.log(regularUser.fullname.userfullname.firstname); // o/p :- swasti

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = (obj1, obj2)

// {} curly braces become the target object and after that everthing is source
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3); // o/p :- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// in general we use separator(...)
const obj4 = {...obj1, ...obj2}
console.log(obj4); // o/p :- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// when data come from database
const users = [
    {
        id: 1,
        email: "swasti@gmail.com"
    },
    {
        id: 1,
        email: "swasti@gmail.com"
    },
    {
        id: 1,
        email: "swasti@gmail.com"
    }
]

users[1].email
console.log(tinder_User); // o/p :- { id: '123abc', name: 'swasti', isLoggedIn: false }
console.log(Object.keys(tinder_User)); // o/p :- [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinder_User)); // o/p :- [ '123abc', 'swasti', false ]
console.log(Object.entries(tinder_User)); // o/p :- [ [ 'id', '123abc' ], [ 'name', 'swasti' ], [ 'isLoggedIn', false ] ]
console.log(tinder_User.hasOwnProperty('isLoggedIn')); // o/p :- true


// destructure objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "swasti"
}
const {courseInstructor} = course
console.log(courseInstructor); // o/p :- swasti

const {courseInstructor: instructor} = course 
console.log(instructor); // o/p :- swasti

// // JSON
// {
//     name: "swasti",
//     coursename: "JS in hindi",
//     price: "free"
// }
// JSON formatter 