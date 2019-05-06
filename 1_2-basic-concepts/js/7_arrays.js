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

    //removing from the end
numbersArray.pop()
console.log(numbersArray);

    // removing from front
numbersArray.shift();
console.log(numbersArray);

    // splice values from array - two values
numbersArray.splice(2,3);
console.log(numbersArray);

// reversing the array
numbersArray.reverse()
console.log(numbersArray);

// concat two arrays - not mutable needs a variable
let concatArray = numbersArray.concat(numbersArrays2);
console.log(concatArray);

// sorting array - not mutable 
    // this sorts only the first number
let sortedArray = concatArray.sort();
console.log(sortedArray);

    // to sort whole array we need function
    sortedArray = concatArray.sort((x,y)=> {
        // return y - y  goes another way (descending)
        return x - y
    });

    console.log(sortedArray);

// Find function - finds first match
const under50 = (number) => {
    return number < 50;
}

let under50Numbers = sortedArray.find(under50);
console.log(under50Numbers)
