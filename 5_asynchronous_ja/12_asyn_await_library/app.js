const http = new EasyHTTP;

//Get users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(data))


//Create users
http.post('https://jsonplaceholder.typicode.com/users', {
    name: 'John Doe',
    username: 'Johndoeaa',
    email: 'johndoe@doe.com'
}).then(data=> console.log(data))
  .catch(error=> console.log(error))


//Update users
http.put('https://jsonplaceholder.typicode.com/users/1', {
    name: 'Charlie',
    username: 'Charlie123',
    email: 'charlie@doe.com'
}).then(data=> console.log(data))
  .catch(error=> console.log(error))


//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data=> console.log(data))
    .catch(error => console.log(error))