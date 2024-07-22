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
// Task 3 and Task 4
let para = document.getElementById("para");
para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "red";
});
para.addEventListener("mouseout", () => {
  para.style.backgroundColor = "";
});
// Task 5
let input = document.getElementById("inputField");
input.addEventListener("keydown", (e) => {
  console.log("Key Pressed:", e.key);
});
let displayPara = document.getElementById("displayValue");
input.addEventListener("keyup", () => {
  displayPara.textContent = input.value;
});
