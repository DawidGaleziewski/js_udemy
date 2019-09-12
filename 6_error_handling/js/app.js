//Using try.. catch..
    //It tests for errors.
    //Try will try to run the code
    //Catch will handle errors
        //Goog thing about this is that if it fails it wont stop the whole scrip

        const user = {email: 'jdoe@gmail.com'}

try {
    // 1. This wil produce referrence error
        //myFunction(); //this will fail as there is no function

    // 2. Produce a TypeError
        //null.myFunction()

    // 3. Synatx error
    //eval('hello world')

    // 4. URI error
        //decodeURIComponent('%')

    // 5. Custom errors
    if(!user.name){ //Throw throws a error
       //Throwing a simple error
        // throw 'User has no name'

       //Creating a object to throw a error
       throw new SyntaxError('User has no name')
    }


} catch(error){ //Catch accepts error object
    console.log(error)
    console.log(error.message) // we can access only part of the message

    console.log(error.name)

    //We can test what kind of error this is
    console.log(error instanceof ReferenceError)

} finally {
    //this will run no matter what will happen above
    console.log('Finally runs reguardless of result')

}

//myFunction() - if we run it outside try.. catch.. it will not continue

console.log('Program continues...')