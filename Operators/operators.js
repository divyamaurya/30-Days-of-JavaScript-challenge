console.log("*****Operators*********");
console.log("*****Activity 1 - Arithmatic Operations*********");
console.log("_____Task 1_____");
let a = 3;
let b = 5;
let c = a + b;
console.log("Add two numbers:", c);

console.log("_____Task 2_____");
let result = a - b;
console.log("Subtract two numbers:", result);

console.log("_____Task 3_____");
let mul_result = a * b;
console.log("Multiplication of two numbers:", mul_result);

console.log("_____Task 4_____");
let divi_result = a / b;
console.log("Division of two numbers:", divi_result);

console.log("_____Task 5_____");
let rem_result = a % b;
console.log("remainder when two numbers divided:", rem_result);

console.log("*********Activity 2 - Assignment Operators*************");
console.log("_____Task 6_____");
let assi_res = (a += b);
console.log("assi_res:", assi_res);

console.log("_____Task 7_____");
let assi_res2 = (a -= b);
console.log("assi_res:", assi_res2);

console.log("*********Activity 3 - Comparison Operators*************");
console.log("_____Task 8_____");
let compare_res1 = a > b;
console.log("comparing a>b:", compare_res1);
let compare_res2 = a < b;
console.log("comparing a<b:", compare_res2);

console.log("_____Task 9_____");
let compare_res3 = a >= b;
console.log("comparing a>=b:", compare_res3);
let compare_res4 = a <= b;
console.log("comparing a<=b:", compare_res4);

console.log("_____Task 10_____");
let numb1 = 5;
let numb2 = "5";
let compare_res5 = numb1 == numb2;
console.log("comparing a==b:", compare_res5);
let compare_res6 = numb1 === numb2;
console.log("comparing a===b:", compare_res6);

console.log("*********Activity 4 - Logical Operators*************");
console.log("_____Task 11_____");
let logical_and_res = compare_res5 && compare_res4;
console.log("logical operator &&:", logical_and_res);
console.log("_____Task 12_____");
let logical_or_res = compare_res5 || compare_res4;
console.log("logical operator or:", logical_or_res);
console.log("_____Task 13_____");
let logical_not = !compare_res5;
console.log("compare_res5 actual result:", compare_res5);
console.log("logical operator not:", logical_not);

console.log("*********Activity 5 - Ternary Operators*************");
console.log("_____Task 14_____");
const ternary_res = a > 0 ? "positive number" : "negative number";
console.log("ternary_res:", ternary_res);
