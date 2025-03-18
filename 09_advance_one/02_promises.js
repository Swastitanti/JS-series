const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // connect to then
    } ,1000)
})

//resolve connection is directly with then
// here it return value
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async two resolve");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Swasti", email: "swasti@mail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if (!error) {
            resolve({username: "swasti", passward: "123"})
        } else {
            reject('ERROR: Something went wrong') // connect to catch
        }
    }, 1000)
})
// reject connected by catch() and it is the chaining 
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise either resolved or rejected")
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if (!error) {
            resolve({username: "javScript", passward: "123"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    // it take time to run
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') 
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

// another way without using getAllUsers
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error)
)


/*
=> the promise object represents the  eventual compilation (or failure) of an asynchronous operation and its resulting value
=> in promise we work on three states 
    1. pending
    2. fulfilled
    3. rejected
=> finally always execute, it is a default value
=> async problem is that they directly don't handle the error
=> we use try.catch for handle the error which comes due to async when the error is true
*/