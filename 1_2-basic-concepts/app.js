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

console.clear();

// #4 Type Conversion
let val;

// #Convert to string
    val = 5;

    console.log(val);
    console.log(typeof val);
    // length only works on strings
    console.log(val.length);


// We can use String() function to convert other data types to string
    // Converting number to a string
    val = String(5 + 5);

        console.log(val);
        console.log(typeof val);
        console.log(val.length);

    // Converting boolean to a string
    val = String(true);
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

    // Converting date to a string
    val =  String(new Date());
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

    // Converting array to string
    val = String([1,2,3,4,5,'John']);
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

// We can aslo use toString() method to converte data to string
    val = (100).toString();
        console.log(val);
        console.log(typeof val);
        console.log(val.length);

console.clear();

// #convert to number
    // #using Number() function
            val = Number('5');
                console.log(val);
                console.log(typeof val);
                // toFixed() method works only on numbers
                console.log(val.toFixed());

        // trying to seet boolean to number
            val = Number(true);
                console.log(val); // Gives 1

            val = Number(false);
                console.log(val); // Gives 0

            val = Number(null);
                console.log(val); // Gives 0

        // Trying to convert alphabet string to a number
            val = Number('Howdy');
                console.log(val); // Gives NaN
                // When value is tried to get parsed as number but cant it becomes NaN
                // Not a Number

        // Array
            val = Number([1,2,3,4]);
                console.log(val); // Gives NaN

    // #using parseInt() function
            // It returns only int, it cuts the decimal .30
            val = parseInt('100.30');
                console.log(val); //Gives 100
            
            val = parseFloat('100.30');
                console.log(val); //Gives 100.3
                // we can also make id return 100.30 by using .toFixed
                console.log(val.toFixed(2));
console.clear();

// #type coercion - done by JS more implicit
            const val1 = String(5);
            // JS will change val2 to a string
            const val2 = 6;
            const sum = val1 + val2;
            console.log(sum); // Gives 56
            console.log(typeof sum);
console.clear();

// ##Numbers and math object
        const num1 = 100;
        const num2 = 50;
        let valNew;

// Simple math
    // simple stuff
    valNew = num1 + num2;
    valNew = num1 * num2;
    valNew = num1 / num2;

    // Modulus operator - gives back what remains
    valNew = 5 % 2; //There are 2x2 and 1 is leftower
        console.log(valNew) //Gives 1

// Math object and its uses
            // Math has properties and methods
    valNew = Math.PI;
        console.log(valNew);

    // Rounding numbers
    valNew = Math.round(2.7);
        console.log(valNew);

    // Rounding numbers - specify if its up or down
    valNew = Math.ceil(2.4);
        console.log(valNew);
    valNew= Math.floor(2.9);
        console.log(valNew);

    // square of a number
    valNew= Math.sqrt(64);
        console.log(valNew);

    // power
    valNew = Math.pow(8, 2);
        console.log(valNew);

    // return minimum/maximim number
    valNew = Math.max(1,2,3,5,7,1,0,234);
        console.log(valNew);
    
    // random method - random decimal
    valNew = Math.random();
        console.log(valNew);

        // If we want whole number we can multiply it by max number we want and add 1
        valNew = Math.random() * 20 + 1;
            console.log(valNew);

        // round down the number
        valNew = Math.floor(Math.random() * 20 + 1);
            console.log(valNew);

console.clear();

// ##Working with strings
const firstName1 = 'William';
const lastName1 = 'Johnson';
const age1 = 30;
let testConcat;


testConcat = firstName1 + ' ' + lastName1;

console.log(testConcat);

// appending
testConcat = 'Brad';
testConcat += ' Johnson'
    console.log(testConcat);

testConcat = 'Hello there my name is ' + firstName + ' and I am ' + age1 + ' years old'
    console.log(testConcat);


 
// escaping characters with backslash \
testConcat = 'That\'s awesome, I can\'t wait'

// Length
console.log(testConcat.length);

// concat method
console.log(testConcat.concat(' ', lastName1));

testConcat = firstName1.toUpperCase();
    console.log(testConcat);

// use strings index as if it was a array 
console.log(testConcat[0])

// Find on which index character is located
            // finds first character
            // if this char is not existing, returns -1
let array = testConcat.indexOf('L');
    console.log(array);

    // searching from ending
    array = testConcat.lastIndexOf('L');
        console.log(array);

// find what character is on specific index - Opposite of indexOf
    array = testConcat.charAt(2);
        console.log(array);
    
    // Getting always the last character
    array = testConcat.charAt(testConcat.length -1);
        console.log(array);

    // pull a substring of characters
    array = testConcat.substring(0, 4);
        console.log(array);

    // Slice mostly ussed with arrays but works same way on strings
    array = testConcat.slice(0, 4)
        console.log(array);

    // Seperate a string into array basing on a character
            // it is usefull for separating basing on spaces
    array = testConcat.split('I');
    console.log(array);

            // use case
            const tags ="web development, design, hot, color theory"
            console.log(tags);
            console.log(tags.split(","))

    // Replace characters or strings
            // seems to be replacing only first match
    const words = "Pawełek Mariuszek Dariuszek"
            console.log(words.replace("ek", "jjit"));

    // Check if something is in the string returning boolean
    console.log(words.includes("Paweł"));
    console.clear();


    // ####################Template literals (also called templates literals)

    // when we want to inject something to html using js
    const literalName = "John";
    const literalAge = 30;
    const literalJob = "Web developer";
    const literalCity = "Miami";
    let html; 

        //Without template strings (es5)
            // html string
            //  if we want to go to diffrent lines we need to concatenate with + signs
            html= '<ul>' +
                '<li>Name:' + literalName + '</li>' +
                '<li>Age:' + literalAge + '</li>' + 
                '<li>Job:' + literalJob +'</li>' +
                '<li>City:' + literalCity + '</li>' +
            '</ul>'

            // injecting the html into the dom
            document.body.innerHTML = html;

        // Template strings (es6)
            // template strings makes this easier
            // it uses backtick, which is to the left of the 1 key on keybord
            // variables are inside ${variable}

            // we can include function calls inside the template literals
            function hello(){
                return 'hello'
            }

            // You can also do:
                // conditionals
                // booleans
                // if statments
        let htmlEs6 = `
            <ul>
                <li>Name: ${literalName} </li>
                <li>Age: ${literalAge} </li>
                <li>Job: ${literalJob} </li>
                <li>City: ${literalCity}</li>
                <li>${2 + 2}</li>
                <li>${hello()}</li>
                <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
            </ul>
        `;
          document.body.innerHTML = htmlEs6;

        




// ############### Arrays 

// Creating arrays - recomended
const numbersArray = [21,2,53,4,45];

// Arrays constructor
const numbersArrays2 = new Array(22,33,4,4,552,2341);

const fruitArray = ['Apple', 'Banana', 'Orange', 'Pear'];

const mixedArray = [22, 'hello', null, undefined, {a:1, b:2}, new Date()];
            console.log(mixedArray);

let valArray;
            console.log(valArray);
            console.log(numbersArray);

// Checking array length - same as with string
console.log(mixedArray.length);

// check if something is a array
valArray = Array.isArray(mixedArray);
console.log(valArray);

// getting single value
valArray = mixedArray[4];
console.log(valArray);

// Inserting into array
numbersArray[2] = 'test number 100';
            // arrays are mutable, we can change individual values
console.log(numbersArray);

// Finding index of a value
valArray = numbersArray.indexOf('test number 100');
console.log(valArray);

// Mutating arrays
    // adding into array - end of array
numbersArray.push('pushed on the end');
console.log(numbersArray);

    // ading to the front
numbersArray.unshift('add to the beggining');
console.log(numbersArray);