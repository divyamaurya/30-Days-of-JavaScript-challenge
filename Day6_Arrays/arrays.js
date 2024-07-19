console.log("*****Arrays*****");
console.log("*****Activity 1 - Array Creation and Access*********");
console.log("_____Task 1_____");
let arr_numb = [1, 2, 3, 4, 5];
console.log("array of numbers", arr_numb);

console.log("_____Task 2_____");
arr_first = arr_numb[0];
arr_last = arr_numb[arr_numb.length - 1];
console.log("arr_first", arr_first);
console.log("arr_last", arr_numb[4]);

console.log("*****Activity 2 - Array Methods(Basic)*********");
console.log("_____Task 3_____");
arr_numb.push(6);
console.log("push method", arr_numb);

console.log("_____Task 4_____");
arr_numb.pop();
console.log("pop method", arr_numb);

console.log("_____Task 5_____");
arr_numb.shift();
console.log("remove first element", arr_numb);

console.log("_____Task 6_____");
arr_numb.unshift(34);
console.log("add new number to the beginning:", arr_numb);

console.log("*****Activity 3 - Array Methods(Intermediate)*********");
console.log("_____Task 7_____");
const map_arr = arr_numb.map((item) => {
  return item * 2;
});
console.log("number is double using map function", map_arr);

console.log("_____Task 8_____");
const filter_arr = arr_numb.filter((item) => {
  return item % 2 === 0;
});
console.log("filter_arr", filter_arr);

console.log("_____Task 9_____");
const reduce_arr = arr_numb.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("reduce_arr", reduce_arr);

console.log("*****Activity 4 - Array Iteration*********");
console.log("_____Task 10_____");
for (let i = 0; i < arr_numb.length; i++) {
  console.log(arr_numb[i]);
}

console.log("_____Task 11_____");
arr_numb.forEach((element) => {
  console.log(element);
});
console.log("*****Activity 3 - Multi-dimensional Arrays*********");
console.log("_____Task 12_____");
// 2D Array
let DArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(DArray);
console.log("_____Task 13_____");
let element = DArray[1][2];
console.log(element);
