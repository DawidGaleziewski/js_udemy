//  ###2 variables ###
// There are 3 possible ways to declare variable
// var, let, const
    // better to use let and const over var (due to block level scope)

// #var
    // variable can include:
        // letters, numbers, _, $
        // thay can NOT start with a number

        var name = "John Doe"; 
        console.log(name);
        // var variables can be changed
        name = 'Steve Smith';
        console.log(name);
    
        // Initializing variable
            // not assigning any value to variable
            // this will set it to undefined
            // this is done very often if want to use it for conditionals
    
        var greeting1;
        console.log(greeting1);
        // we can assign the variable later in the code
        greeting1 = "Howdy";
        console.log(greeting1);
    
        // multi word variable - use camel case
        var firstName = "Karen"; //camelCase
            // other conventions
        var first_name = "Sarah" //underscore_case
        var FirstName = "Tom" //PascalCase
    
    // #let
        // Seems identical to var
        // on Global scope it is identical
        // block level scopes are better with let
    
        // Let can do same things that var like assining and re-assigining the values to variables
        let nameLet;
        nameLet = "John Doe"
        console.log(nameLet);
        nameLet = "Stevesen";
        console.log(nameLet);
    
    // #const
        // works diffrent - it is a constant, values cannot be re-assigned to it
    const nameConst = "John";
    console.log(nameConst);
    // this will throw a error
    // nameConst = "Marrie";
    console.clear();
    
    // we also cannot just declere it and not assign any value to it
    
    
    // Important on how objects work in const!
    const person = {
        name: "John",
        age: 30
    }
    
    // we CAN mutate the values of the object despite the fact that it is a const
    // We can change data in the object, as it still is that object (has same name)
    person.name = "Sara"
    console.log(person);
    
    // same principle goes for arrays
        // we can change the content of the array, add or subtract items from it
        // what we cannot do is change the name of array
    const numbers = [1,2,3,4,5];
    numbers.push(10);
    console.log(numbers);
    
    // Const, matating is ok, re-assigining is not
    // it is suggested to use const as long as you do not need to:
        // initialize it
        // iterate it thru a loop
        // re-assign it
        // this makes code more robust, more secure, more redable
    
    console.clear();