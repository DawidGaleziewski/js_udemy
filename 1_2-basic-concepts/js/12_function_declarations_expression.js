// FUNCTION DECLARATION
    // it was declared, so it wont start
    // if we declare parameters but do not provide arguments function will put undefined in its places
function greet(firstName, lastName){
    // console.log('Hello');
    return `hello ${firstName} ${lastName}`;
}

console.log(greet('John', 'Doe'));


    // handling default values for arguments in ES5
    function greet2(firstName, lastName){
        if(typeof  firstName === 'undefined'){firstName = 'John'}
        if(typeof  lastName === 'undefined'){lastName = 'Doe'}
        // console.log('Hello');
        return `hello ${firstName} ${lastName}`;
    }
    
    console.log(greet2('John'));


    // handling default values for arguments in ES6
    function greet3(firstName = 'John', lastName= 'Doe'){
        // console.log('Hello');
        return `hello ${firstName} ${lastName}`;
    }

    console.log(greet3('Steve', 'Smith'));
    console.log(greet3());


//FUNCTION EXPRESSIONS - function as variable/const
    // expressions works mostly the same but has it advantages in:
        //hoisting
        // closeures  

    // usually is anonymus
    // declaring defaults looks the same in function expression
    const square = function(x = 2){
        return x*x;
    }

    // but named function will work as well
    const square2 = function square2(x =2){
        return x*x;
    }

    console.log(square(8));


// IIFEs - IMMIDIETLY INVOKABLE FUNCTION EXPRESSIONS
    // function that is declared and run at the same time
    // it needs to be a expression and we need to put it in parenthasies
    // we need to add another parenthasies after it ()
    (function(){
        console.log('from a IIFE')
    })() //another parenthesies calling this function

// PROPERTY METHOD - function in a object

// Property method is inside a object
const todo = {
    // we add function as a value of a key
    add: function(){
        console.log('Add todo')
    },
    // they can accept arguments as any function
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

// other way of adding a function to existing object
todo.delete = function(){
    console.log('Delete todo..')
}

// invoking property method
todo.add();
todo.edit(24);