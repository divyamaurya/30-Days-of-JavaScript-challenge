// Activity: Selecting and Manipulating Elements
// Task 1
const elementByID = document.getElementById("textChange");
elementByID.textContent = "Updated content using element id";
// Task 2
const elementByClass = document.getElementsByClassName("bgColor");
elementByClass[0].style.backgroundColor = "red";
// Activity 2: Creating and Appending Elements
// Task 3
let divElement = document.createElement("div");
divElement.textContent = "Append element using createElement";
document.body.appendChild(divElement);
// Task 4
let existingElement = document.getElementById("ulList");
let newLi = document.createElement("li");
newLi.textContent = "Li content";
existingElement.appendChild(newLi);
// Activity 3: Removing Elements
// Task 5
let elementToBeRemoved = document.getElementById("ulList");
document.body.removeChild(elementToBeRemoved);
// Task 6
let lastChildToBeRemoved = document.getElementById("body");
document.body.removeChild(lastChildToBeRemoved.lastChild);
// Activity 4: Modifying Attributes and Classes
// Task 7
let image = document.getElementById("image");
image.src =
  "https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_960_720.jpg";
image.alt = "aimahg";
// Task 8
let addClass = document.getElementById("myElement");
addClass.classList.add("hightlight");
let removeClass = document.getElementById("myElement2");
removeClass.classList.remove("hightlight2");
// Activity 5: Event Handling
// Task 9
const clickToUpdateText = () => {
  let textToBeChange = document.getElementById("text");
  textToBeChange.textContent = "hello";
};
// using event listener
let button = document.getElementById("eventListenerbtn");
button.addEventListener("click", () => {
  let p = document.getElementById("text");
  p.textContent = "Result: When clicked on event listener button";
});
// Task 10
let elementForMouseover = document.getElementById("text");
elementForMouseover.addEventListener("mouseover", () => {
  elementForMouseover.style.border = "1px solid red";
});
elementForMouseover.addEventListener("mouseout", () => {
  elementForMouseover.style.border = "none";
});
