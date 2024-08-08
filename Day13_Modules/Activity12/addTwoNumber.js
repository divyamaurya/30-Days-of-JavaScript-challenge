// Task 1, Task 2, Task 3, Task 4
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

const person = {
  name: "divya",
  age: 23,
  getMethod: () => {
    return `${person.name} and ${person.age}`;
  },
};

// Export both addNumbers and person as properties of an object
module.exports = {
  addNumbers,
  person,
};
