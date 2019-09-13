//Describes pattern of characters
    //Used for for validation, pulling something from text
    //Patterns

let re;
let reCaseInsensitive;
let reGlobal;
//Regular expression is enclosead between slashes //
re = /hello/; //Literally takes this value !is case sensitive

    //Flags
reCaseInsensitive = /hello/i; //i is canse insensitive
reGlobal = /hello/g //g is global - will find all instances of occurance not just one


console.log(re); // returns /hello/
console.log(re.source) //returns hello

//Functions to evaluate expressions
    //exec() - Return result in array for match and null for no match

    //We use .exec() on expression we want to use and pass the string we wat to search from
    const result = re.exec('brad hello world')
    const result_none = re.exec('world')

    console.log(result) //array with: expression, index where it starts, input string we searched
    console.log(result[0]) //Expression itself
    console.log(result.index) //Index where expression starts
    console.log(result.input) //Input string


    console.log(result_none) //returns null

//test() - returns true or false
const resultBool = re.test('hello there') //It return tru !it is case sensitive
console.log(resultBool)


//match() - Return result array or null
const str = 'Hello There';
const resultMatch = str.match(reCaseInsensitive);
console.log(resultMatch) //Same as .exec but diffrent syntax used


//search() - returns index of the first match - if not found returns -1
const strSearch = '11Hello there';
const resultSearch = strSearch.search(reCaseInsensitive);
console.log(resultSearch)



//replace() - return new string with some or all matches of a pattern

const strReplace = 'Hello there';
const newString = strReplace.replace(reCaseInsensitive, 'Bye');
console.log(newString);