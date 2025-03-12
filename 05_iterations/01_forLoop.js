// for Loop Syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is Present");
    }
    console.log(element);
}

for (let i = 0; i <= 2; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 2; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + 'x' + j + ' = ' + i*j); 
    }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue
for (let index = 1; index <= 5; index++) {
    if (index == 4){
        console.log("Detected 4");
        break
    }
    console.log(`value of i is ${index}`);
}


for (let index = 1; index <= 5; index++) {
    if (index == 4){
        console.log(`Detected 4`);
        continue
    }
    console.log(`value of i is ${index}`);
}

/*
=> break is use to terminate from the program 
=> continue is use to skip that part of code
*/