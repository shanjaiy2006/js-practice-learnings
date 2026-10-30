// isHalwaThere = false;

// function waitInQueue() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(isHalwaThere) {
//                 resolve("Halwa is there.You can buy it");
//             }
//             else {
//                 reject(new Error("Halwa finish"));
//             }
//         },1000);
//     });
// }
// async function buyHalwa() {
//     try {
//         let result = await waitInQueue();
//         console.log(result);
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }

// buyHalwa();
// console.log("Hii");

/* TASK 1: Change text */
const heading = document.getElementById("heading");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  heading.textContent = "Text Changed Successfully!";
});

/* TASK 2: Change HTML content */
const htmlBox = document.getElementById("htmlBox");

document.getElementById("changeHTMLBtn").addEventListener("click", function () {
  htmlBox.innerHTML = "<strong>Now this text is bold!</strong>";
});

/* TASK 3: Read input value */
document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (name === "") {
    greeting.textContent = "Please enter your name!";
  } else {
    greeting.textContent = "Hello, " + name + "!";
  }
});

/* TASK 4: Button click counter */
let clicks = 0;

document.getElementById("countBtn").addEventListener("click", function () {
  clicks++;
  document.getElementById("count").textContent = clicks;
});

/* TASK 5: Show and hide text */
document.getElementById("toggleTextBtn").addEventListener("click", function () {
  const text = document.getElementById("hideText");

  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

/* TASK 6: Change background color */
document.getElementById("colorBtn").addEventListener("click", function () {
  const box = document.getElementById("colorBox");

  if (box.style.backgroundColor === "yellow") {
    box.style.backgroundColor = "lightblue";
  } else {
    box.style.backgroundColor = "yellow";
  }
});

/* TASK 7: Change font size */
let fontSize = 16;

document.getElementById("fontBtn").addEventListener("click", function () {
  fontSize += 2;
  document.getElementById("fontText").style.fontSize = fontSize + "px";
});

/* TASK 8: Update image */
let imageChanged = false;

document.getElementById("imageBtn").addEventListener("click", function () {
  const image = document.getElementById("myImage");

  if (imageChanged === false) {
    image.src = "https://placehold.co/200x100?text=Image+Two";
    image.alt = "Second placeholder image";
    imageChanged = true;
  } else {
    image.src = "https://placehold.co/200x100?text=Image+One";
    image.alt = "First placeholder image";
    imageChanged = false;
  }
});

/* TASK 9: Change attributes */
document.getElementById("linkBtn").addEventListener("click", function () {
  const link = document.getElementById("myLink");

  link.setAttribute("href", "https://www.wikipedia.org");
  link.textContent = "Visit Wikipedia";

  console.log("Link destination:", link.getAttribute("href"));
});

/* TASK 10: Select elements */
document.getElementById("selectBtn").addEventListener("click", function () {
  const items = document.querySelectorAll(".item");

  items.forEach(function (item) {
    item.textContent = item.textContent + " - Selected!";
  });
});
