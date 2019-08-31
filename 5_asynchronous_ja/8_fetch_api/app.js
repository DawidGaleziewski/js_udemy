//Fetch api is newer standar for handling the requests
//Fetch is part of a window object

document.getElementById('button1').addEventListener('click', getText);


function getText(){
    //We start with fetch keyword
        //Important thing to remember is that fetch return promises!
        //As with any promise we need to use .then() after it
            //then accepts a callback function
                //Callback function accepts response as a argument
    fetch('text.txt')
        .then(function(response){
            //Response has status, type, headers
                //In prototype we have json an text methods
                //If we use response.text() method we get a promise
                //If we were dealing with json we would use json() method here
            return response.text();
            //This then will return a promise
        })
        .then(function(data){
            //This then will return actual data
            //console.log(data);
            document.getElementById('output').innerHTML = data
        })
        .catch(function(error){
            //Catch is optional for error handling.
            //It will accept a callback which passes error argument
            console.log(error)
        })
}


//Event listener for button2
document.getElementById('button2').addEventListener('click', getJson)

//Get local JSOn data
function getJson(){
    fetch('post.json')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            data.forEach(function(JSONpost){
                const post = document.createElement('div');
                const postHeader = document.createElement('p');
                const postBody = document.createElement('p');
                
                const headerText = document.createTextNode(JSONpost.title);
                const bodyText = document.createTextNode(JSONpost.body)

                postHeader.appendChild(headerText);
                postBody.appendChild(bodyText);

                post.appendChild(postHeader);
                post.appendChild(postBody);


               document.getElementById('output').appendChild(post)
            })



            //document.getElementById('output').innerHTML
        })
}



//Get data from external API
document.getElementById('button3').addEventListener('click',getURLdata);

function getURLdata(){
    fetch('https://api.github.com/users')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let output = '';
            data.forEach(function(user){
                output += `<li>${user.login}</>`
            })
            document.getElementById('output').innerHTML = output
        })
}