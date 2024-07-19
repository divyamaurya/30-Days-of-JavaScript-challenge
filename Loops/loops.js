console.log("*****Loops*****");
console.log("*****Activity 1 - For Loop*********");
console.log("_____Task 1_____");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("_____Task 2_____");
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}
console.log("*****Activity 2 - while loop*********");
console.log("_____Task 3_____");
let sum = 0;
let j = 1;
while (j < 11) {
  sum += j;
  console.log("j+sum", j + sum);
  j++;
}
console.log("sum", sum);

console.log("_____Task 4_____");
let num = 11;
while (num >= 2) {
  num--;
  console.log(num);
}

console.log("*****Activity 1 - Do..while Loop*********");
console.log("_____Task 5_____");
let i = 1;
do {
  console.log(i++);
} while (i <= 5);

console.log("_____Task 6_____");
const factorial = (n) => {
  let res = 1;
  let i = n;
  do {
    res *= i;
    i--;
  } while (i > 0);
  return res;
};
console.log(factorial(4));
console.log(factorial(5));

console.log("*****Activity 4 - Nested Loop*********");
console.log("_____Task 7_____");
let n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

console.log("*****Activity 5 - Loop Control Statements*********");
console.log("_____Task 8_____");
for (let n = 1; n <= 10; n++) {
  if (n == 5) {
    continue;
  }
  console.log(n);
}

console.log("_____Task 9_____");
for (let n_break = 1; n_break <= 10; n_break++) {
  if (n_break == 7) {
    break;
  }
  console.log(n_break);
}
