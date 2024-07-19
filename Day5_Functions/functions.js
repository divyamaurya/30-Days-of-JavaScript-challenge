console.log("*****Functions*****");
console.log("*****Activity 1 - Function Declaration*********");
console.log("_____Task 1_____");
const evenOdd = (num) => {
  if (num % 2 === 0) {
    console.log("number us even");
  } else {
    console.log("number is odd");
  }
};
evenOdd(25);
evenOdd(24);

console.log("_____Task 2_____");
const sqNumber = (num) => {
  return num * num;
};
let res = sqNumber(4);
console.log("sq of a number", res);

console.log("*****Activity 1 - Function Expression*********");
console.log("_____Task 3_____");
const maxTwoNumb = (numb1, numb2) => {
  if (numb1 > numb2) {
    console.log(numb1);
  } else {
    console.log(numb2);
  }
};
maxTwoNumb(5, 6);
maxTwoNumb(65, 46);

console.log("_____Task 4_____");
const concString = (str1, str2) => {
  return str1 + str2;
};
let res_concString = concString("Divy", "a");
console.log("Concatenation of two string", res_concString);

console.log("*****Activity 3 - Arrow Function*********");
console.log("_____Task 5_____");
const sumOfTwo = (a, b) => {
  return a + b;
};
let res_sumOfTwo = concString(34, 76);
console.log("Sum of two numbers", res_sumOfTwo);

console.log("_____Task 6_____");
const containsCharacter = (str, char) => str.includes(char);
let string1 = "Hello, World!";
let string2 = "JavaScript is awesome";
console.log(containsCharacter(string1, "o")); // true
console.log(containsCharacter(string2, "o")); // false

console.log(
  "*****Activity 3 - Function Parameters and Default values*********"
);
console.log("_____Task 7_____");
const productOfTwo = (numb1, numb2 = 3) => {
  return numb1 * numb2;
};
let res_prod = productOfTwo(4);
console.log("Product of two", res_prod);

console.log("_____Task 8_____");
const personDetails = (name, age = 23) => {
  return `Hello ${name}! age is ${age}`;
};
let perName = "Divya";
console.log(personDetails(perName));

console.log("*****Activity 3 - Higher Order Function*********");
console.log("_____Task 9_____");
// Write a higher-order function that takes a function and a number and calls the function that many times
const callNTimes = (func, n) => {
  for (let i = 0; i < n; i++) {
    func();
  }
};
const sayHello = () => {
  console.log("Hello");
};

callNTimes(sayHello, 3);
console.log("_____Task 10_____");
// Wite a higher-order function that takes two functions and a Value,applies the first function to the value, and then applies the second funtions to the result
const twofunc = (func1, func2, value) => {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};
const double = (x) => {
  return x * 2;
};
const addTen = (x) => {
  return x + 10;
};

let value = 4;
let finalResult = twofunc(double, addTen, value);
console.log("finalResult:", finalResult); // Output: (4 * 2) + 10 = 18
