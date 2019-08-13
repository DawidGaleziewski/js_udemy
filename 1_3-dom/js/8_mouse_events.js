const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// //Click
// clearBtn.addEventListener('click', runEvent);

// //Doubleclick
// clearBtn.addEventListener('dblclick', runEvent)

// //Mouse down - click and hold
// clearBtn.addEventListener('mousedown', runEvent)


// //Mouse up
// clearBtn.addEventListener('mouseup', runEvent) //release the click

// //Mouse enter - Fires only on initial parent eelement
// card.addEventListener('mouseenter', runEvent) 

// //Mouse leave - Fires only on initial parent eelement
// card.addEventListener('mouseleave', runEvent) 


// //Mouse over - fires also when howvering on hild elements
// card.addEventListener('mouseover', runEvent)

//Mouse move - fires when moving inside this element
card.addEventListener('mousemove', runEvent)

// Event Handler
function runEvent(e){
    e.preventDefault();
    console.log(`Event type: ${e.type}`);

    // Display cordinates of the mouse
    heading.textContent = `MouseX: ${e.pageX},  MouseY: ${e.pageY}`;

    document.body.style.backgroundColor = `rgb(${e.pageX}, ${e.pageY}, 40)`;
}