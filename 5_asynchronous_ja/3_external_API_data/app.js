document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
   const number = document.querySelector('input[type=number]').value

   const xhr = new XMLHttpRequest();
   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
   xhr.onload = function(){
       if(this.status === 200){
           console.log('test')
            const jokesJSON = JSON.parse(this.responseText);

            let output = '';

            //API specific - make sure the response we got is success from the server
            if(jokesJSON.type === 'success'){
                //This responds with object not array
                //It is important to check the format of the response for each API we use
                jokesJSON.value.forEach(function(joke){
                    output+= `<li>${joke.joke}</li>`
                })

            }else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output

       }
   } 

   xhr.send();
   e.preventDefault();
    
}