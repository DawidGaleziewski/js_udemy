// Callback functions
    //Below is presented issue that we can have due to diffrent server response times

    //Mimics possible problems with server responses
    //Due to fact that create posts responds after 2 seconds and getPosts responds after 1 seconds, posts are added before they are complete. The function does not wait for response from server


const posts = [
    {title: 'Post one', body: 'this is post one' },
    {title: 'Post Two', body: 'this is post two' }
]


// //1. This acts as it was a server, fetches data and ads it to existing array of objects
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000)
// }

// //2. add posts to the site
// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output+= `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title: 'post three', body: 'this is post three'})

// getPosts()

//##SOLUTION FOR THIS ISSUE

//1. Solving issues via callback.
    //We add second function, called callback or cb (names are only conventions it can be called anything)
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);

        //We invoke the function as we would any other
        callback()
    }, 2000)
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


//2 Now the function accepts two arguments, we can add the second function as a callback, making sure it will start invoking after first one finishes
createPost({title: 'post three', body: 'this is post three'}, getPosts)



