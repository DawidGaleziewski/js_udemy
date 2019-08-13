// window.localStorage
// localStorage API is part of the browser and has its own methods
    //values in localStorage have to be a string
    // we can save arrays but we have to change them to strings before saving them and reverse when we want to use them

// localStorage will stay after browser is closed. 

// setItem stores key- value pairs
localStorage.setItem('name', 'John') //this can be seen in dev tools-> application -> local storage

// session storage works the same. It will however not be there after re-opening the browser
sessionStorage.setItem('age', '20');

// Removing localStorage items by key
// localStorage.removeItem('name');

//get from storage
const name = localStorage.getItem('name')


// clear all the values in localStorage
localStorage.clear()


console.log(name)



document.querySelector('form').addEventListener('submit', 
    function(e){

        // 1. Prevent default - site refresh
        e.preventDefault()
        const task = document.getElementById('task').value;

        // Get local storage value and if anything is there put it in array

        // 2 Declare the variable
        let tasks;

        if(localStorage.getItem('tasks') ===null){
            // 3. If there is no such key valyue pair in locar storage declare a new array
            tasks = [];
        } else {
            // 4. Load string of tasks if it exists in local storage
            // 5. Change string of tasks into array (it says json but it changes to original data type)
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }


        // 6. Push task we have added to the form into array we have loaded from local storage
        tasks.push(task);

        // 7. Save updated value into local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
})
