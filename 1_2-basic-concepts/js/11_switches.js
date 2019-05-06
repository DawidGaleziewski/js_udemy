'use strict'

const color = 'blue';

// what we will be testin is in the brackets
    // each case describes diffrent scenario
switch(color){
    case 'red': //ends in colon :
        console.log('color is red');
        // each case ends in break
    break;
    case 'blue': 
        console.log('Color is blue');
    break;
    default:
        console.log('color is not red or blue');
    break;
}

// switch is good when there are a lot of diffrent cases

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
    break;
    case 1:
        day = 'Monday';
    break;
    case 2:
        day = 'Tuesday';
    break;
    case 3:
        day = 'Wednesday';
    break;
    case 4:
        day = 'Thursday';
    break;
    case 5:
        day = 'Friday';
    break;
    case 6:
        day = 'Saturday';
    break;
}

console.log(`Today is ${day}`)