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