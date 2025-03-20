# javaScript and classes

## OOP 
## object
- collection of properties and method
- eg:- toLowerCase

## why use OOP
- to resolve messy code 

## part of OOP
- object literal

- Constructor function
- Prototypes
- Classes
- Instances (ne, this)

## 4 Pillars
- Abstraction (abstraction is a concept used to hide unnecessary details and show only the essential features of an object or a function. It helps to simplify complex logic by exposing only what is required for interaction while keeping the internal implementation hidden.)
CODE :-
// Function to calculate area of a circle
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Hiding complex math logic, just using the function
console.log(getCircleArea(5)); // Output: 78.53981633974483

- Encapsulation (Encapsulation is the process of bundling data (properties) and methods (functions) that operate on that data into a single unit, typically an object or a class. It restricts direct access to some of the object’s data, allowing controlled modification through public methods.)

CODE :- 
class Person {
    constructor(name, age) {
        this.name = name; // Public property
        let _age = age;   // Private variable using closure

        // Getter for age
        this.getAge = function () {
            return _age;
        };

        // Setter for age with validation
        this.setAge = function (newAge) {
            if (newAge > 0) {
                _age = newAge;
            } else {
                console.log("Age must be positive.");
            }
        };
    }

    // Public method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.getAge()} years old.`);
    }
}

// Create an instance
const person1 = new Person('Tara', 20);
person1.greet();  // Output: Hello, my name is Tara and I am 20 years old.

// Accessing and modifying private data through methods
person1.setAge(21);
console.log(person1.getAge());  // Output: 21

// Direct access is restricted
console.log(person1._age); // ❌ Undefined, private variable

- Inheritance (Inheritance is a fundamental concept in object-oriented programming where one class (child class) inherits the properties and methods of another class (parent class). This promotes code reusability and allows you to extend functionality without rewriting code.)

CODE :-
// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Parent method
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class
class Dog extends Animal {
    // Additional method specific to Dog
    bark() {
        console.log(`${this.name} barks! Woof woof!`);
    }
}

// Create an instance of Dog
const myDog = new Dog('Buddy');
myDog.makeSound();  // Output: Buddy makes a sound.
myDog.bark();       // Output: Buddy barks! Woof woof!

- Polymorphism (Polymorphism is a concept in object-oriented programming where different classes can define the same method, but each implementation behaves differently based on the object that is invoking it.

In JavaScript, polymorphism is achieved through method overriding and interfaces (via duck typing).)

CODE :- 

// method with overriding
// Parent class
class Animal {
    makeSound() {
        console.log('Animal makes a sound');
    }
}

// Child class
class Dog extends Animal {
    makeSound() {
        console.log('Dog barks: Woof Woof!');
    }
}

// Another child class
class Cat extends Animal {
    makeSound() {
        console.log('Cat meows: Meow Meow!');
    }
}

// Create instances
const myDog = new Dog();
const myCat = new Cat();

// Call the same method, different behavior
myDog.makeSound();  // Output: Dog barks: Woof Woof!
myCat.makeSound();  // Output: Cat meows: Meow Meow!
