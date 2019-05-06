//LOOPS

// for, while, do while are themost popular loops

// FOR LOOP

// declaration of a variable
// condition (while this is true continue)
// incrementation
// when i is no longer smaller than 10 it will loop
for(let i = 0; i < 10; i++){
    console.log('number: ' + i)
}
console.clear();

// skipping a iteration
for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        // this will skip the rest of current iteration
        continue
    }
    // console.log('number; ' + i)
        // on iteration of 2 it will skip this iteration
    console.log('number: ' + i)
}

console.clear();

// breaking the loop
for(let i = 0; i < 10; i ++){
    if(i=== 5){
        // this will stop rest of the iterations
        console.log('Woop woop - Stop the loop')
        break;
    }
    console.log('number: ' + i)
}

console.clear();

// WHILE LOOP 
    // for loop - use when you know how many times it will run
    // while - you do not know many times it will run

let i = 0;

while(i < 10) {
    console.log(i);
    i++
}

console.clear();

// do while loop - it will run at least once
    // it will loop at least once
i = 100;

do {
    console.log('number ' + i)
}

while(i < 10) 
console.clear()

// LOOPING THROUGH ARRAY
const cars= ['Ford', 'Chevy', 'Honda', 'Toyota'];

// using for loop
for (let i =0; i < cars.length; i++){
    console.log(cars[i])
}

// foreach array looping method - takes callback function
// it accepts 3 arguments: current iterating item, index, whole array
cars.forEach(function(car, index, carsArray){
    console.log(`car name is ${car}`);
    console.log(`car index is ${index}`);
    console.log(`cars array is ${carsArray}`);
})
console.clear();

// MAP returns diffrent array
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sarah'},
    {id:3, name:'Karen'},
    {id:10, name:'Steve'},
]

// map takes callback function as well
    // it accepts argument of current iteration
const ids = users.map(function(user){
    // map needs return, this will return the value back to new array
    return user.id;
})

console.log(ids);

// FOR IN loop - used with objects

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let userKey in user){
    console.log(userKey);
    // getting object
    console.log(user[userKey])
}