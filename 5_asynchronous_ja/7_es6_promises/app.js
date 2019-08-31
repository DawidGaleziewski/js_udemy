//Promises are alternatives for callbacks in asynchronous programming.
//Promise will start a function and code in .then will continue after it is finished

const posts = [
    {title: 'Post one', body: 'this is post one' },
    {title: 'Post Two', body: 'this is post two' }
]

function createPost(post){
    //We create a new Promise object and return it.
    //The object constructor accepts a function
    //
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            //This is just to triger the error
            const error = true
            if(!error){
                //Normally callback function would be here
                resolve();

                //Reject is for error handling
            } else {
                reject('Error: something went wrong')
            }
    

        }, 2000)
    });

}


function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}


//After that we add .then and what should happen after the async function compleates
createPost({title: 'post three', body: 'this is post three'})
.then(getPosts)
.catch(function(err){
    //if we use reject in the function body we have to have a .catch to handle any issues
    console.log(err)
})
;



