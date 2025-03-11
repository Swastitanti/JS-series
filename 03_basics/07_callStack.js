// how to execute our code

// javascript Execution Context

/*
=> whenever code execute global execution always created and it refers it to this function 
=> in browser this value is window for node this is empty
=> 3 types in JS execution
    1. Global Execution context
    2. Function Execution context
    3. Eval Execution context (in mongoDB) 
=> code run in Two phase
    1. Memory Creation Phase or Creation Phase (here only place will be allocated in the memory)
    2. Exection Phase
*/

let val1 = 10
let val2 = 5 
function assnum(num1, num2){
    let total = num1 + num2 
    return total 
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)

/*
=> here first global execution or global environment created
=> second it goes to memory phase (First Cycle)
    1. val1 -> undefined
    2. val2 -> undefined
    3. addnum -> defination
    4. result1 -> undefined
    5. result2 -> undefined
=> third it goes to exection phase (Second Cycle)
    1. val1 <- 10
    2. val2 <- 5
    3. addnum -> in every execution of a function a "new Executional context is created" and inside it new variable environment and exection thread is created
    4. inside the new executional context again memory phase created
        1. val1 -> undefined
        2. val2 -> undefined
        3. total -> undefined
    5. now execution context 
        1. num1 -> 10
        2. num2 -> 5
        3. total -> 15
    6. and now it return total to the global executional 
    7. once the execution is done the new executional context is deleted 
    8. similarly for result2
*/

// Call Stack

/*
=> it work as a stack push and pop 
=> LIFO concept works 
*/