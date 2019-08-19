//Build in constructors
//IMPORTANT - using constructors to create primitives is often a bad idea!

  //String
  const name1 = 'Jeff' //Returns primitive value
  const name2 = new String('Jeff'); //Returns a string that is a object and not a primitive value

  console.log (name1)
  console.log(name2)

    //we can assign values for constructor created string:
    name2.foo = "bar"

    //This can however cause issues when checking types
    console.log(`The type of name1 is ${typeof name1}`)
    console.log(`The type of name1 is ${typeof name2}`)

    //Issues that can be caused during validation
    if(name1 === 'Jeff'){
      console.log('Jeff is a string')
    } else {
      console.log('Jeff is not a string')
    }

    if(name2 === 'Jeff'){
      console.log('Jeff is a string')
    } else {
      console.log('Jeff is not a string')
    }

  //Number
  const num1 = 5;
    //Also returns object!
  const num2 = new Number(5);

  console.log(num1)
  console.log(num2)

  //Boolean
  const bool1 = true;
  const bool2 = new Boolean(true);

  console.log(bool1);
  console.log(bool2);

  //Functions - constructor
  const getSum1 = function(x, y){
    return x + y
  }

  //Function body is passed as last param!
  const getSum2 = new Function('x', 'y', 'return 1 + 1')
  console.log(getSum1(1,2))

  //Objects - same result
  const john1 = {name: "John"};
  const john2 = new Object({name: 'John'})
  console.log(john1)
  console.log(john2)


  //Arrays - same result
  const arr1 = [1,2,3,4]
  const arr2 = new Array(1,2,3,4)

  console.log(arr1);
  console.log(arr2)

  //Regex - requires escape characters
  const reg1 = /\w+/
  const reg2 = new RegExp('\\w+') //We need to escape to get backslash

  console.log(reg1);
  console.log(reg2); 
