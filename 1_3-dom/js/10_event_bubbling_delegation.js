// Event bubling
    // bubbling events UP to the dom
    //it will bubble up to parent elements

//Event delegation
    //We put listiner on the parent and use logic in the listener to target child elements


// EVENT BUBBLING
    // document.querySelector('.card-title').addEventListener('click', function(){
    //     console.log('card title')
    // })

    //     // putting event listener on its parent
    // document.querySelector('.card-content').addEventListener('click', function(){
    //     console.log('card content')
    // })


    // document.querySelector('.card').addEventListener('click', function(){
    //     console.log('card')
    // })


    // document.querySelector('.col').addEventListener('click', function(){
    //     console.log('col')
    // })

    // Effect is that all of this fires:

    // card title
    // card content
    // card
    // col

    // We clicked the most nested child and all its parents did fire event listener
    // When we click outer elements it wont fire the children however

// EVENT DELEGATION
    //due tof act that we add event listener it will add only to one item
    //if we insert something to document using js we will aslo need event delegation
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem)

    // we target a parent
    document.body.addEventListener('click', deleteItem)

    // we can fix this by working on event object
function deleteItem(e){
    
    console.log(e.target)
    // we use conditional to fire event only when we click desired items
    // However we want to target the element above it (i and not just the link)
    if(e.target.parentElement.classList.contains('delete-item') ){
        console.log('delete item');
        // Afer clicking i we want to removbe li which is two levels up
        e.target.parentElement.parentElement.remove()
    }
}
