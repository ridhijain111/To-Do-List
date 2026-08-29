const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");

function updateTaskCount() {

    const numberOfTasks = taskList.children.length;

    if (numberOfTasks === 0) {
        taskCount.textContent = "0 tasks";
    }
    else if (numberOfTasks === 1) {
        taskCount.textContent = "1 task";
    }
    else {
        taskCount.textContent = numberOfTasks + " tasks";
    }

}

function updateEmptyMessage() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    }
    else {
        emptyMessage.style.display = "none";
    }

}


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");

    text.textContent = taskText;

    text.classList.add("task-text");

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");

    li.appendChild(text);

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    text.addEventListener("click", function () {

        li.classList.toggle("completed");

    });


    deleteButton.addEventListener("click", function () {

        li.remove();

        updateTaskCount();

        updateEmptyMessage();

    });


    updateTaskCount();

    updateEmptyMessage();

}


addTaskButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


updateTaskCount();

updateEmptyMessage();