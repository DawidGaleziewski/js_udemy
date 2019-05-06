'use strict'
// js has a date object
let val;

// by default it creates todays date
const today = new Date();
console.log(today);
console.log(typeof today); //object

// changing date to string
console.log(typeof today.toString());

// multiple ways of creating a date object
const birthday = new Date('9-10-1981 11:25:00');
console.log(birthday);

const birthdayTwo = new Date('September 10 1981')
console.log(birthdayTwo);
const birthdayThree = Date('9/10/1981');

// getting the date
const stPetersDay = new Date ('1-1-2017');
val = stPetersDay.getMonth();
    // important it is 0 base! it will return 0 and not 1
console.log(val)

// returning day - not 0 based
console.log(stPetersDay.getDate());

// numerical representation of the day
console.log(stPetersDay.getDay());

console.log(stPetersDay.getFullYear());

console.log(stPetersDay.getHours());

console.log(stPetersDay.getSeconds());

// timestamp
console.log(stPetersDay.getTime())

// Mutating the time object
console.log(stPetersDay.getMonth());
stPetersDay.setMonth(2);
console.log(stPetersDay.getMonth());

// Setting year
console.log(stPetersDay.setFullYear(1927));
stPetersDay.setMonth(2);
console.log(stPetersDay.getFullYear());
