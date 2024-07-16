console.log("*****Control Structure*****");
console.log("*****Activity 1 - If-Else Statements*********");
console.log("_____Task 1_____");
let numb = 40;
if (numb > 0) {
  console.log("Number is positive");
} else if (numb < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

console.log("_____Task 2_____");
let age = 20;
if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log("Not eligible");
}

console.log("*****Activity 2 - Nested If-Else Statements*********");
console.log("_____Task 3_____");
const largestNumber = (numb1, numb2, numb3) => {
  let largestNumb;
  if (numb1 > numb2) {
    if (numb1 > numb3) {
      largestNumb = numb1;
    } else {
      largestNumb = numb3;
    }
  } else {
    if (numb2 > numb3) {
      largestNumb = numb2;
    } else {
      largestNumb = numb3;
    }
  }
  console.log("The largest number is", largestNumb);
};
largestNumber(2, 65, 45);
largestNumber(67, 6, 8);

console.log("*****Activity 3 - Switch-case*********");
console.log("_____Task 4_____");
const getDayName = (dayNumb) => {
  let dayName;
  switch (dayNumb) {
    case 1:
      dayName = "monday";
      break;
    case 2:
      dayName = "tuesday";
      break;
    case 3:
      dayName = "wednesday";
      break;
    case 4:
      dayName = "thursday";
      break;
    case 5:
      dayName = "friday";
      break;
    case 6:
      dayName = "saturday";
      break;
    case 7:
      dayName = "sunday";
      break;
    default:
      "Invalid Day";
  }
  console.log(dayName);
};
getDayName(1);
getDayName(5);
getDayName(7);

console.log("_____Task 5_____");
const findGrade = (score) => {
  let grade;
  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80 && score <= 89:
      grade = "B";
      break;
    case score >= 70 && score <= 79:
      grade = "C";
      break;
    case score >= 60 && score <= 69:
      grade = "D";
      break;
    case score >= 50 && score <= 59:
      grade = "F";
      break;
    default:
      "Fail";
  }
  console.log("Grade:", grade);
};
findGrade(76);

console.log("*****Activity 4 - Conditiona(Ternary) Operator*********");
console.log("_____Task 6_____");
let number = 20;
number % 2 === 0 ? console.log("even number") : console.log("odd number");

console.log("*****Activity 5 - Combining conditions*********");
console.log("_____Task 7_____");
let year = 2023;
if (year % 400 === 0) {
  console.log("Not a leap year");
} else if (year % 100 === 0) {
  console.log("Not a leap year");
} else if (year % 4 === 0) {
  console.log("year is a leap year");
} else {
  console.log("Not a leap year");
}
