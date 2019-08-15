//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');





//Load all event listeners
loadEventListeners();



//### Load all event listeners ###
function loadEventListeners(){
  //Add task event
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks)
}

// ### ADDING TASKS ###
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task')
  }

  //Create li elemtnt
  const li = document.createElement('li');

  // Add class to the li
  li.classList = "collection-item";

  //Create text node
  const textNode = document.createTextNode(taskInput.value)
  li.appendChild(textNode);

  // Create new link element
  const link = document.createElement('a');
  link.classList ="delete-item secondary-content";

  //add the icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'

  // Append finished li to ul
  li.appendChild(link)

  taskList.appendChild(li)

  //Clear the input
  taskInput.value = '';

  e.preventDefault();
}

// ### DELETE TASKS ###
  // It is best to use event delegation as there are multiple files
function removeTask(e){
  // checking if the parent of the i we clicked (the li) has this class in the class list
  if(e.target.parentElement.classList.contains('delete-item')){
    //asking for confirmation from the user to delete
    if(confirm('Are you sure?')){
      //deleting the item
      e.target.parentElement.parentElement.remove()
    }
    
  }
}


// ### CLEAR TASKS ###
function clearTasks(e){
  // Slower way
    // taskList.innerHTML = "";

  //Faster
    //while there is still first style
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }
}


// ### !! FILTER TASKS !! ###
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;

    // We can check if the item has the part of the string by indexOf, if it does not contain this match it will return -1
    if(item.toLocaleLowerCase().indexOf(text) !== -1){
      task.style.display = "block";
    }else {
      task.style.display = "none"
    }
  })
  
}
