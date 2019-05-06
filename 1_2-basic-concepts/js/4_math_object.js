
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