// if statments

const id = '100';

// EQUAL TO VALUE
if(id == 100){
    console.log('correct');
} else {
    console.log('incorrect')
}

// EQUAL TO VALUE AND TYPE
if(id === 100){
    console.log('correct');
} else {
    console.log('incorrect')
}

// NOT EQUAL TO
if(id != 101) {
    console.log('it is not equal')
}


// not EQUAL TO VALUE AND TYPE
if(id !== 100){
    console.log('correct');
} else {
    console.log('incorrect')
}

// CHECKING IF THE VALUE EXISTS
    // ! if we put it just in condition like (var) it will throw a error in console
    // we need to use type of
    // we want to test type not the variable itself

if(typeof nonExistent !== 'undefined'){
    console.log(`The value is ${nonExistent}`);
} else{
    console.log('No value')
}

// Greater or equal to
if (id >= 100){
    console.log(`id is greater or equal to 100 and its value is ${id}`)
} else {
    console.log('id is lesser than 100')
}

if (id <= 100){
    console.log(`id is lesser or equal to 100 and its value is ${id}`)
} else {
    console.log('id is greater than 100')
}

// if else
const color ='yellow';
if (color === 'red'){
    console.log('red');
} else if(color === 'yellow'){
    console.log('color is yellow')
} else {
    console.log('unknown color')
}

// ##LOGICAL OPERATORS

// and operator &&
const name = 'Steve';
const age = 4;

if(age >0 && age <12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is a adult`)
}
console.clear();

// or operator ||
if(age < 16 || age > 65){
    console.log(`${name} cannot run in the race`)
} else {
    console.log(`${name} is registred for the race`)
}


// TERNARY OPERATOR (conditional shorthand)
console.log(id === 200 ? 'CORRECT' : 'INCORRECT')

// {} braces in if statments are optional
if(id===100)
    console.log('CORRECT')
else
console.log('incorrect')