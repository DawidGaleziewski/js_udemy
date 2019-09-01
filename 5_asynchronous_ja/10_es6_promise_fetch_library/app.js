const http = new EasyHTTP;

//Get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


//Create user
const data = {
    name: 'John Doe',
    username: 'Johndoe',
    email: "jdoe@gmail.com"
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


//Update user
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(error => console.log(error))