const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select')

form.addEventListener('submit', runEvent);

function runEvent(e){
    //stop redirect
    // e.preventDefault();

    // console.log(taskInput.value)
    console.log(`EVENT TYPE: ${e.type}`)

    // console.log(e.target.value)

    // We can use event object to access the text we have inputed
        // heading.innerText = e.target.value
}

// keydown fires  when you press any key
// taskInput.addEventListener('keydown', runEvent)

// happens when we let go of the key
taskInput.addEventListener('keyup', runEvent)

// General key even happens whenever we press the key
taskInput.addEventListener('keypress', runEvent)


// Focus - when we click inside of input and it gets highlighted/we can type in it
taskInput.addEventListener('focus',runEvent)

//Blur - when we get out of focuss
taskInput.addEventListener('blur',runEvent)


// Cut - when we ctr + x to cut the text
taskInput.addEventListener('cut',runEvent)

//paste
taskInput.addEventListener('paste',runEvent)


// input - any kind of input type of action will fire it
taskInput.addEventListener('input',runEvent)

// select listiner - when dropdown changes from options
select.addEventListener('change', runEvent)