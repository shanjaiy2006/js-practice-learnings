/* TASK 21: Click events */
let clickCount = 0;

document.getElementById("clickBtn").addEventListener("click", function () {
  clickCount++;
  document.getElementById("clickResult").textContent =
    "You clicked " + clickCount + " times!";
});

/* TASK 22: Input events */
document
  .getElementById("liveInput")
  .addEventListener("input", function (event) {
    document.getElementById("liveResult").textContent =
      "You typed: " + event.target.value;
  });

/* TASK 23: Form submit and preventDefault() */
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();

  document.getElementById("formResult").textContent = "Welcome, " + name + "!";
});

/* TASK 24: Basic email validation */
document.getElementById("validateBtn").addEventListener("click", function () {
  const email = document.getElementById("emailInput").value.trim();
  const result = document.getElementById("validationResult");

  if (email === "") {
    result.textContent = "Please enter an email.";
  } else if (!email.includes("@") || !email.includes(".")) {
    result.textContent = "That email looks invalid. Try again.";
  } else {
    result.textContent = "Email looks okay!";
  }
});

/* TASK 25: Keyboard events */
document
  .getElementById("keyInput")
  .addEventListener("keydown", function (event) {
    document.getElementById("keyResult").textContent =
      "You pressed: " + event.key;
  });

/* TASK 26: Mouse events */
const mouseBox = document.getElementById("mouseBox");
const mouseResult = document.getElementById("mouseResult");

mouseBox.addEventListener("mouseover", function () {
  mouseResult.textContent = "Mouse entered the box!";
});

mouseBox.addEventListener("mouseout", function () {
  mouseResult.textContent = "Mouse left the box!";
});

mouseBox.addEventListener("click", function () {
  mouseResult.textContent = "You clicked the box!";
});

/* TASK 27: Checkbox change */
document
  .getElementById("agreeCheckbox")
  .addEventListener("change", function (event) {
    const result = document.getElementById("checkboxResult");

    if (event.target.checked) {
      result.textContent = "You agreed! ✅";
    } else {
      result.textContent = "You unchecked the box.";
    }
  });

/* TASK 28: Dropdown change */
document
  .getElementById("colorSelect")
  .addEventListener("change", function (event) {
    const color = event.target.value;
    const result = document.getElementById("colorResult");

    if (color === "") {
      result.textContent = "Choose a color above.";
    } else {
      result.textContent = "You selected: " + color;
      result.style.color = color;
    }
  });

/* TASK 29: Event delegation and closest() */
document
  .getElementById("itemContainer")
  .addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button");

    if (!clickedButton || !event.currentTarget.contains(clickedButton)) {
      return;
    }

    document.getElementById("itemResult").textContent =
      "You selected: " + clickedButton.dataset.name;
  });

/* TASK 30: removeEventListener() */
const listenerResult = document.getElementById("listenerResult");
const listenerStatus = document.getElementById("listenerStatus");

function handleParagraphClick() {
  listenerResult.textContent = "Paragraph clicked! Listener is working.";
}

document.getElementById("startBtn").addEventListener("click", function () {
  listenerResult.addEventListener("click", handleParagraphClick);
  listenerStatus.textContent = "Listener is running.";
});

document.getElementById("stopBtn").addEventListener("click", function () {
  listenerResult.removeEventListener("click", handleParagraphClick);
  listenerStatus.textContent = "Listener is stopped.";
});
