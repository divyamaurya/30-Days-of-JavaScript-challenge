// Activity 1: Basic Event Handling
// Task 1
let btn_para = document.getElementById("textChangeButton");
btn_para.addEventListener("click", () => {
  let para = document.getElementById("para");
  para.textContent = "changed the text on click";
});
// Task 2
let image = document.getElementById("doubleClickImage");
image.addEventListener("dblclick", () => {
  if (image.style.display !== "none") {
    image.style.display = "none";
  } else {
    image.style.display = "block";
  }
});
// Activity 2: Mouse Events
// Task 3 and Task 4
let para = document.getElementById("para");
para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "red";
});
para.addEventListener("mouseout", () => {
  para.style.backgroundColor = "";
});
// Activity 3: Keyboard Events
// Task 5 and Task 6
let input = document.getElementById("inputField");
input.addEventListener("keydown", (e) => {
  console.log("Key Pressed:", e.key);
});
let displayPara = document.getElementById("displayValue");
input.addEventListener("keyup", () => {
  displayPara.textContent = input.value;
});
// Activity 4: Form Events
// Task 7 and Task 8
const formEventsInputField = document.getElementById("formEventInputField");
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formEventsInputField.value);
});
// Activity 5: Event Delegation (Event Bubbling)
// Task 9 and Task 10
const myList = document.getElementById("myList");
myList.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
const parent = document.getElementById("parent");
let childElement = document.createElement("a");
childElement.textContent = "Link";
childElement.href = "www.google.com";
childElement.target = "_blank";
parent.appendChild(childElement);
