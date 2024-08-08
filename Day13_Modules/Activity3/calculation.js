// main.js

// Import the entire module as an object
import * as myMath from "./importEntireModules.js";

// Using the constants
console.log("PI:", myMath.PI); // Output: PI: 3.14159
console.log("E:", myMath.E); // Output: E: 2.71828

// Using the functions
const sum = myMath.add(10, 5);
const difference = myMath.subtract(10, 5);
const product = myMath.multiply(10, 5);
const quotient = myMath.divide(10, 5);

console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5
console.log("Product:", product); // Output: Product: 50
console.log("Quotient:", quotient); // Output: Quotient: 2
