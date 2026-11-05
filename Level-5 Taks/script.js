// ========================================
// TASK 41 - LOCALSTORAGE: SAVE DATA
// ========================================

const usernameInput = document.getElementById("usernameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const usernameResult = document.getElementById("usernameResult");

saveNameBtn.addEventListener("click", function () {
  const username = usernameInput.value.trim();

  if (username === "") {
    usernameResult.textContent = "Please enter your name.";
    return;
  }

  localStorage.setItem("username", username);

  usernameResult.textContent = "Name saved: " + username;
});

// ========================================
// TASK 42 - LOCALSTORAGE: GET AND REMOVE
// ========================================

// Load previously saved username when page opens
const savedUsername = localStorage.getItem("username");

if (savedUsername !== null) {
  usernameResult.textContent = "Welcome back, " + savedUsername;
  usernameInput.value = savedUsername;
}

// Remove saved username
document.getElementById("removeNameBtn").addEventListener("click", function () {
  localStorage.removeItem("username");

  usernameInput.value = "";
  usernameResult.textContent = "Username removed.";
});

// ========================================
// TASK 43, 44, 45 & 49 - TASK MANAGER
// ========================================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskMessage = document.getElementById("taskMessage");
const clearTasksBtn = document.getElementById("clearTasksBtn");

// TASK 43: Store tasks in an array
let tasks = [];

// Load tasks from LocalStorage
const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {
  try {
    tasks = JSON.parse(savedTasks);

    if (!Array.isArray(tasks)) {
      tasks = [];
    }
  } catch {
    tasks = [];
  }
}

// TASK 43: Save array into LocalStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// TASK 43: Render array data into HTML
function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach(function (task) {
    const li = document.createElement("li");

    // TASK 44: Store unique ID on the element
    li.dataset.id = task.id;

    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    if (task.completed) {
      taskText.classList.add("completed");
    }

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.dataset.action = "complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.dataset.action = "delete";

    li.append(taskText, completeBtn, deleteBtn);

    taskList.append(li);
  });
}

// Add a task
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    taskMessage.textContent = "Please enter a task.";
    return;
  }

  // TASK 44: Generate unique ID
  const newTask = {
    id: crypto.randomUUID(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);

  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskMessage.textContent = "Task added!";
});

// TASK 45: Event delegation
taskList.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button || !taskList.contains(button)) {
    return;
  }

  const li = button.closest("li");

  if (!li) {
    return;
  }

  const taskId = li.dataset.id;
  const action = button.dataset.action;

  if (action === "complete") {
    tasks.forEach(function (task) {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
    });
  }

  if (action === "delete") {
    tasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
  }

  saveTasks();
  renderTasks();
});

// Clear all tasks
clearTasksBtn.addEventListener("click", function () {
  tasks = [];

  saveTasks();
  renderTasks();

  taskMessage.textContent = "All tasks cleared.";
});

// Display saved tasks when page first loads
renderTasks();

// ========================================
// TASK 46 - MUTATION OBSERVER
// ========================================

const mutationResult = document.getElementById("mutationResult");

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      mutationResult.textContent = "Task list changed! DOM was updated.";
    }
  });
});

observer.observe(taskList, {
  childList: true,
});

// ========================================
// TASK 47 - INTERSECTION OBSERVER
// ========================================

const observeBox = document.getElementById("observeBox");

const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      observeBox.classList.add("visible");

      observeBox.querySelector("p").textContent =
        "The box is now visible on your screen!";
    } else {
      observeBox.classList.remove("visible");
    }
  });
});

intersectionObserver.observe(observeBox);

// ========================================
// TASK 48 - WINDOW RESIZE
// ========================================

const screenWidth = document.getElementById("screenWidth");
const screenMessage = document.getElementById("screenMessage");

function updateScreenWidth() {
  const width = window.innerWidth;

  screenWidth.textContent = width + "px";

  if (width < 500) {
    screenMessage.textContent = "You are using a small screen.";
  } else {
    screenMessage.textContent = "You are using a larger screen.";
  }
}

// Run once when page opens
updateScreenWidth();

// Run whenever browser window is resized
window.addEventListener("resize", updateScreenWidth);

// ========================================
// TASK 50 - FINAL PROJECT STATUS
// ========================================

document.getElementById("finalMessage").textContent =
  "Task Manager loaded successfully!";
