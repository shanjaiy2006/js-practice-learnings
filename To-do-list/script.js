function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let taskInputField = document.getElementById("taskInput");
    if(taskInput.trim() === ""){
        alert("Please enter a task.");
        return;
    }
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskInput;
    taskList.appendChild(li);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function() {
        if(li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        }
        else {
            li.style.textDecoration = "line-through";   
        }

    }
    li.appendChild(completeBtn);
    deleteButton.onclick = function() {
        li.remove();
    }
    li.appendChild(deleteButton);
    taskInputField.value = "";
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTasks() {
    let ol = document.getElementById("list");
    ol.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        let com = document.createElement("button");
        com.textContent = task.completed
            ? "Undo"
            : "Complete the task";

        com.onclick = function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            showTasks();
        };

        let but = document.createElement("button");
        but.textContent = "Delete the task";

        but.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
            showTasks();
        };

        li.appendChild(com);
        li.appendChild(but);
        ol.appendChild(li);
    });
}

function addtask() {
    let tp = document.getElementById("task");
    let task = tp.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();
    showTasks();

    tp.value = "";
}

showTasks();