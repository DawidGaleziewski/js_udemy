// //We add async keyword to the beggining of the function
//     //This will cause function to return a promise
// async function myFunc(){

//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=> resolve('hello'), 1000)
//     })

//     const error = true;

//     if(!error){
//         const res = await promise; //Wait until promise is resolved
//         return res
//     } else {
//        await Promise.reject(new Error('Something went wrong'));
//     }
// }

// //We can use then now
// myFunc()
//     .then((response)=> console.log(response))
//     .catch(err => {console.log(err)})


async function getUsers(){
    //Await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //Only proceed once once the fetch promise is resolved
    const data = await response.json()

    //Only proceed once second promise is resolved
    return data
}

getUsers().then(users => {console.log(users)})