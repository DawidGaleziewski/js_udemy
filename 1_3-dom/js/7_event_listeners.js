// event listeners

const button =  document.querySelector('.clear-tasks')

button.addEventListener('click',
function(event){ //event object!
    // Element default behaviour will be passed to the callback function
    event.preventDefault();
    console.log('Clicked');

    let val;

    val = event;

    // target of the event
    val = event.target; //target element of the click

    val = event.target.className; //classes as string of the target
    val = event.target.classList;
    
    event.target.innerText = 'hello'; //changes inner text of the target element

    val = event.type //type like click or hover

    val = event.timeStamp;

    // Cordinates of event to the window from top
    val = event.clientY

    //Cordinated from left to the object
    val = event.clientX

    val = event.offsetY; //relevant from the object itself!

    console.log(val)
});