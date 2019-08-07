// Selecting by id
    document.getElementById('task-title');
    console.log(document.getElementById('task-title'));
    console.log(document.getElementById('task-title').id);

    const taskTitle = document.getElementById('task-title');

// manipulate styles
    taskTitle.style.background = "#333";
    taskTitle.style.color = "#fff";

    // often used
    // document.getElementById('task-title').style.display= "none";

// changing content
    taskTitle.textContent = "task list textContent";
    taskTitle.innerText = "task list innerText";

    taskTitle.innerHTML = "<span> Task list by innerHTML</span>";

// Selecting by querySelector
document.querySelector('#task-title');
document.querySelector('li').style.color = "red";
document.querySelector('li:last-child').style.color = "red";