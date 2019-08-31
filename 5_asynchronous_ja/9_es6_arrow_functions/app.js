//Arrow function gices us adventage with lexical this

//First way of declaring arrow function
const sayHello = () => {
    console.log('Hello');
}


//One line function does not need bracers
const sayHello1 = () => console.log('Hello');

//One liners will return the value
    
const sayHello2 = ()=> 'hello';
    //OBJECT LITERAL WILL CAUSE ISSUES when used this way!!
        //It will threat {} as function body and not object literal, we can fix it by wrapping it
        const sayHello3 = () => ({msg: 'Hello'})

//Single param does not need parenthesis
const sayHello4 = name => console.log(`Hello ${name}`)

