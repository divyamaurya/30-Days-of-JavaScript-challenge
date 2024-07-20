console.log("*****ES6 Features*****");
console.log("*****Activity 1 - Template Literals*********");
console.log("_____Task 1_____");
let pname = "Divya";
let age = 23;
console.log(`${pname} and ${age}`);

console.log("_____Task 2_____");
let str = `Hello,
World!

What's

up?`;
console.log(str);

console.log("*****Activity 2 - Destructuring*********");
console.log("_____Task 3_____");
let arr = ["red", "green", "blue", "beige"];
let [firstElement, secondElement] = arr;
console.log("First Element:", firstElement);
console.log("Second Element:", secondElement);

console.log("_____Task 4_____");
const book = {
  title: "title",
  author: "divya",
};
const { title, author } = book;
console.log("Title:", title);
console.log("Author:", author);

console.log("*****Activity 3 - Spread and  Rest Operators*********");
console.log("_____Task 5_____");
// Use spread operator to create a new array that includes all elements od an existing array plus additional elements and log the new array to the console
const arr1 = ["banana", "apple", "cherry"];
const arr2 = ["dates", "elderberry"];
let newArray = [...arr1, ...arr2];
console.log("newArray", newArray);

console.log("_____Task 6_____");
// Use rest operator in a function to accept an arbitrary number of arguments, sum them and return the result
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 4));
console.log(sum(1, 2, 32, 54, 657, 76));

console.log("*****Activity 4 - Default Parameters*********");
console.log("_____Task 7_____");
const productOfTwo = (a, b = 43) => {
  return a * b;
};
console.log("productOfTwo", productOfTwo(10));

console.log("*****Activity 5 - Enhance Object Literals*********");
console.log("_____Task 8_____");
const personalDetails = {
  pname: "Divya",
  age: 23,
  getInfo: () => {
    return `${pname} and ${age}`;
  },
};
console.log("personalDetails", personalDetails);

console.log("_____Task 9_____");
// Create an object with computed property names based on variables and log the object to the console
let key1 = "foo";
let key2 = "bar";
let value1 = 42;
let value2 = "hello";
const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);
