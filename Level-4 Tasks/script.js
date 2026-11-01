// ========================================
// TASK 31 - TO-DO LIST
// ========================================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearTasksBtn = document.getElementById("clearTasksBtn");
const todoMessage = document.getElementById("todoMessage");

addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();

  if (task === "") {
    todoMessage.textContent = "Please enter a task!";
    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  completeBtn.addEventListener("click", function () {
    taskText.classList.toggle("completed");

    completeBtn.textContent = taskText.classList.contains("completed")
      ? "Undo"
      : "Complete";
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.append(taskText, completeBtn, deleteBtn);
  taskList.append(li);

  taskInput.value = "";
  todoMessage.textContent = "Task added!";
});

clearTasksBtn.addEventListener("click", function () {
  taskList.replaceChildren();
  todoMessage.textContent = "All tasks cleared!";
});

// ========================================
// TASK 32 - CHARACTER COUNTER
// ========================================

const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", function () {
  charCount.textContent = messageInput.value.length;
});

// ========================================
// TASK 33 - SEARCH / FILTER LIST
// ========================================

const searchInput = document.getElementById("searchInput");
const nameList = document.getElementById("nameList");
const searchMessage = document.getElementById("searchMessage");

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase().trim();

  const names = nameList.querySelectorAll("li");
  let visibleCount = 0;

  names.forEach(function (name) {
    const nameText = name.textContent.toLowerCase();

    if (nameText.includes(searchValue)) {
      name.style.display = "";
      visibleCount++;
    } else {
      name.style.display = "none";
    }
  });

  searchMessage.textContent =
    visibleCount === 0 ? "No matching names found." : "";
});

// ========================================
// TASK 34 - TABS
// ========================================

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedTab = button.dataset.tab;

    tabButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    button.classList.add("active");

    document.getElementById(selectedTab).classList.add("active");
  });
});

// ========================================
// TASK 35 - ACCORDION
// ========================================

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// ========================================
// TASK 36 - MODAL POPUP
// ========================================

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal when clicking outside its content
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// ========================================
// TASK 37 - IMAGE GALLERY
// ========================================

const gallery = document.getElementById("gallery");
const mainImage = document.getElementById("mainImage");

gallery.addEventListener("click", function (event) {
  if (event.target.classList.contains("gallery-image")) {
    mainImage.src = event.target.src;
    mainImage.alt = event.target.alt;
  }
});

// ========================================
// TASK 38 - CALCULATOR
// ========================================

const calculator = document.getElementById("calculator");
const calculatorDisplay = document.getElementById("calculatorDisplay");
const calculateBtn = document.getElementById("calculateBtn");
const clearCalculatorBtn = document.getElementById("clearCalculatorBtn");
const calculatorMessage = document.getElementById("calculatorMessage");

let firstNumber = null;
let selectedOperator = null;
let waitingForSecondNumber = false;

calculator.addEventListener("click", function (event) {
  const button = event.target;

  if (button.dataset.value !== undefined) {
    const value = button.dataset.value;

    if (waitingForSecondNumber) {
      calculatorDisplay.value = value === "." ? "0." : value;
      waitingForSecondNumber = false;
    } else if (value === "." && calculatorDisplay.value.includes(".")) {
      return;
    } else if (calculatorDisplay.value === "0" && value !== ".") {
      calculatorDisplay.value = value;
    } else {
      calculatorDisplay.value += value;
    }

    calculatorMessage.textContent = "";
  }

  if (button.dataset.operator !== undefined) {
    firstNumber = Number(calculatorDisplay.value);
    selectedOperator = button.dataset.operator;
    waitingForSecondNumber = true;
  }
});

calculateBtn.addEventListener("click", function () {
  if (selectedOperator === null || waitingForSecondNumber) {
    return;
  }

  const secondNumber = Number(calculatorDisplay.value);
  let result;

  switch (selectedOperator) {
    case "+":
      result = firstNumber + secondNumber;
      break;

    case "-":
      result = firstNumber - secondNumber;
      break;

    case "*":
      result = firstNumber * secondNumber;
      break;

    case "/":
      if (secondNumber === 0) {
        calculatorMessage.textContent = "Cannot divide by zero!";
        return;
      }

      result = firstNumber / secondNumber;
      break;
  }

  calculatorDisplay.value = String(Number(result.toFixed(8)));

  firstNumber = null;
  selectedOperator = null;
  waitingForSecondNumber = true;
});

clearCalculatorBtn.addEventListener("click", function () {
  calculatorDisplay.value = "0";
  firstNumber = null;
  selectedOperator = null;
  waitingForSecondNumber = false;
  calculatorMessage.textContent = "";
});

// ========================================
// TASK 39 - COUNTDOWN TIMER
// ========================================

const countdownInput = document.getElementById("countdownInput");
const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");
const resetTimerBtn = document.getElementById("resetTimerBtn");
const timerDisplay = document.getElementById("timerDisplay");
const timerMessage = document.getElementById("timerMessage");

let remainingSeconds = 0;
let timerInterval = null;

function displayTime() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  timerDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

startTimerBtn.addEventListener("click", function () {
  if (timerInterval !== null) {
    return;
  }

  if (remainingSeconds <= 0) {
    const inputSeconds = Number(countdownInput.value);

    if (!Number.isInteger(inputSeconds) || inputSeconds <= 0) {
      timerMessage.textContent = "Enter a valid number of seconds.";
      return;
    }

    remainingSeconds = inputSeconds;
  }

  timerMessage.textContent = "";
  displayTime();

  timerInterval = setInterval(function () {
    remainingSeconds--;
    displayTime();

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      timerMessage.textContent = "Time is up!";
    }
  }, 1000);
});

stopTimerBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
  timerMessage.textContent = "Timer paused.";
});

resetTimerBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingSeconds = 0;

  timerDisplay.textContent = "00:00";
  countdownInput.value = "";
  timerMessage.textContent = "Timer reset.";
});

// ========================================
// TASK 40 - FORM VALIDATION
// ========================================

const registrationForm = document.getElementById("registrationForm");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let isValid = true;

  const nameValue = userName.value.trim();
  const emailValue = userEmail.value.trim();
  const passwordValue = userPassword.value;

  // Name validation
  if (nameValue === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (passwordValue.length < 8) {
    passwordError.textContent = "Password must contain at least 8 characters.";
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Registration successful!";
    formMessage.className = "success";

    registrationForm.reset();
  } else {
    formMessage.textContent = "Please correct the errors above.";
    formMessage.className = "error";
  }
});
