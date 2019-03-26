// #Refreshing the basics

// ##1 console logging ##

// playing with console.log
// alert('js');
console.log("basic console output");
console.log(123);
console.log(true);
var greeting = "hello there";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});

// printing data as a table
console.table({a:1, b:2});

// outputing something as a error
console.error("error::Webex now!");

// other way of clearing consoler
console.clear();

// output something as warning
console.warn("Be warned!");


// show how much operation between .time and timeEnd takes
console.time("hello");
    console.log("howdy");
    console.log("howdy");
    console.log("howdy");
    console.log("howdy");
console.timeEnd("hello");

console.clear();

//  ###2 variables ###
// There are 3 possible ways to declare variable
// var, let, const
    // better to use let and const over var (due to block level scope)

// #var
    // variable can include:
        // letters, numbers, _, $
        // thay can NOT start with a number

    var name = "John Doe"; 
    console.log(name);
    // var variables can be changed
    name = 'Steve Smith';
    console.log(name);

    // Initializing variable
        // not assigning any value to variable
        // this will set it to undefined
        // this is done very often if want to use it for conditionals

    var greeting1;
    console.log(greeting1);
    // we can assign the variable later in the code
    greeting1 = "Howdy";
    console.log(greeting1);

    // multi word variable - use camel case
    var firstName = "Karen"; //camelCase
        // other conventions
    var first_name = "Sarah" //underscore_case
    var FirstName = "Tom" //PascalCase

// #let
    // Seems identical to var
    // on Global scope it is identical
    // block level scopes are better with let

    // Let can do same things that var like assining and re-assigining the values to variables
    let nameLet;
    nameLet = "John Doe"
    console.log(nameLet);
    nameLet = "Stevesen";
    console.log(nameLet);

// #const
    // works diffrent - it is a constant, values cannot be re-assigned to it
const nameConst = "John";
console.log(nameConst);
// this will throw a error
// nameConst = "Marrie";
console.clear();

// we also cannot just declere it and not assign any value to it


// Important on how objects work in const!
const person = {
    name: "John",
    age: 30
}

// we CAN mutate the values of the object despite the fact that it is a const
// We can change data in the object, as it still is that object (has same name)
person.name = "Sara"
console.log(person);

// same principle goes for arrays
    // we can change the content of the array, add or subtract items from it
    // what we cannot do is change the name of array
const numbers = [1,2,3,4,5];
numbers.push(10);
console.log(numbers);

// Const, matating is ok, re-assigining is not
// it is suggested to use const as long as you do not need to:
    // initialize it
    // iterate it thru a loop
    // re-assign it
    // this makes code more robust, more secure, more redable

console.clear();

// ###3 datatypes###

// Two types of data types:
    // #1 Primitive data types
        // stored directly in the location the variable accesses
        // stored on the stack
    
    String
    "some text"

    Number
    1234 // int decimals and floats all are consider numbers

    Boolean

    null //Empty value

    undefined // variable that was not assigned a value

    // Symbols (ES6)

    // #2 Reference data types
        // accessed by reference
        // objects that are stored on the heap
        // a pointer to a location in the memory
        // Considered objects
    Array

    //Object Literals

    Function

    Date

    //Other 


    // Dynamically Typed Language
        // Types are associated with VALUES and not VARIABLES
        // in other languages you need to define what kind of type is allowed to be used


    // Examples
        //# Primitive
            // String
            const stringExample = 'Lorem ipsum et labora';
                // checking what type is the variable
                console.log(typeof stringExample);

            const age = 45;
                console.log(typeof age);

            const handsome = true;
                console.log(typeof handsome);

            const car = null;
                // THIS IS SUPRISINGLY OBJECT
                // This is a bug
                console.log(typeof car)

            let lazyVariable;
                console.log(typeof lazyVariable);

            const sym = Symbol();
                // this is a new data type in ES6
                console.log(typeof sym);

        
        //# Reference types - objects
            // Array
            const hobbies = ['movies', 'music', 'programming'];
                console.log(typeof hobbies);
            
                // Object literal
            const address = {
                city: 'Boston',
                state: 'MA'
            }
                console.log(typeof address);

            // Date
            const today = new Date();
            console.log(today);
            console.log(typeof today);


