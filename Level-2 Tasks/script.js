/* TASK 11: Create an element */

document.getElementById("createBtn").addEventListener("click", function () {
  const paragraph = document.createElement("p");

  paragraph.textContent = "I was created using JavaScript!";

  document.getElementById("createBox").append(paragraph);
});

/* TASK 12: Add an element */

let itemNumber = 0;

document.getElementById("addBtn").addEventListener("click", function () {
  itemNumber++;

  const paragraph = document.createElement("p");
  paragraph.textContent = "New item " + itemNumber;

  document.getElementById("addBox").appendChild(paragraph);
});

/* TASK 13: Remove an element */

document.getElementById("removeBtn").addEventListener("click", function () {
  const paragraph = document.getElementById("removeText");

  if (paragraph) {
    paragraph.remove();
  }
});

/* TASK 14: Replace an element */

document.getElementById("replaceBtn").addEventListener("click", function () {
  const oldParagraph = document.getElementById("oldText");
  const newParagraph = document.createElement("p");

  newParagraph.textContent = "I am the new paragraph!";

  oldParagraph.replaceWith(newParagraph);
});

/* TASK 15: Add and remove classes */

document.getElementById("addClassBtn").addEventListener("click", function () {
  document.getElementById("classText").classList.add("highlight");
});

document
  .getElementById("removeClassBtn")
  .addEventListener("click", function () {
    document.getElementById("classText").classList.remove("highlight");
  });

/* TASK 16: Toggle a class */

document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

/* TASK 17: Check whether a class exists */

document.getElementById("checkBtn").addEventListener("click", function () {
  const paragraph = document.getElementById("checkText");
  const result = document.getElementById("checkResult");

  if (paragraph.classList.contains("highlight")) {
    result.textContent = "Yes! The highlight class exists.";
  } else {
    result.textContent = "No, the highlight class does not exist.";
  }
});

/* TASK 18: Add list items */

document.getElementById("addListBtn").addEventListener("click", function () {
  const input = document.getElementById("itemInput");
  const itemText = input.value.trim();

  if (itemText === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = itemText;

  document.getElementById("myList").append(listItem);

  input.value = "";
});

/* TASK 19: Clear a list */

document.getElementById("clearListBtn").addEventListener("click", function () {
  document.getElementById("myList").replaceChildren();
  /* TASK 19: Remove a particular list item using index */

  document
    .getElementById("clearListBtn")
    .addEventListener("click", function () {
      const list = document.getElementById("myList");

      const index = Number(document.getElementById("dlt").value);

      if (index < 1 || index > list.children.length) {
        alert("Invalid index");
        return;
      }

      list.children[index - 1].remove();
    });
});

/* TASK 20: Navigate DOM elements */

const firstChild = document.getElementById("firstChild");
const navigationResult = document.getElementById("navigationResult");

document.getElementById("parentBtn").addEventListener("click", function () {
  navigationResult.textContent =
    "Parent element: " + firstChild.parentElement.id;
});

document.getElementById("childrenBtn").addEventListener("click", function () {
  const parent = document.getElementById("parentBox");

  navigationResult.textContent =
    "Number of child elements: " + parent.children.length;
});

document.getElementById("nextBtn").addEventListener("click", function () {
  navigationResult.textContent =
    "Next sibling: " + firstChild.nextElementSibling.textContent;
});

document.getElementById("previousBtn").addEventListener("click", function () {
  navigationResult.textContent =
    "Previous sibling: " +
    (firstChild.previousElementSibling?.textContent || "None");
});
