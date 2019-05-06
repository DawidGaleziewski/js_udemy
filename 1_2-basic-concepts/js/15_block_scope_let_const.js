// let & const vs var
// global scope
var a = 1;
let b = 2;
const c = 3;

console.log('global scope: ',a,b,c)


// function scope - those are diffrent  scope
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ',a,b,c)
}

test();
console.log('global scope after changes: ',a,b,c)

// block level scope - for example IF
if(true){
    // block scope
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Block scope ',a,b,c)
}

console.log('global scope after changes: ',a,b,c) //a was changed to 7 due to fact var will be affected from block scope

// ! var will be change in block scope but not in function

for(let a = 0; a< 10; a++){
    console.log('looping a with let')
}

console.log(a) //remains the same as it was let

for(var a = 0; a< 10; a++){
    console.log('looping a with var')
}

console.log(a) //it will change to 10 as it was var

// var will change from block and loop level