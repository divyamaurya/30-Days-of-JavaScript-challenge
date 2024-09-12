class Person {
  // Constructor method to initialize properties
  constructor(pname, age) {
    this.pname = pname; // Fixed syntax here
    this.age = age;
  }

  // Method to greet
  greet() {
    return `Hello, my name is ${this.pname} and I am ${this.age} years old`; // Use this.pname and this.age
  }

  // Static method (not tied to any instance)
  static species() {
    return "Hello Sapiens";
  }
}

// Creating an instance
const person1 = new Person("Alice", 25);
console.log(person1.greet());

// Accessing properties and methods
console.log(person1.pname);
console.log(person1.age);

// Inheritance
class Student extends Person {
  constructor(pname, age, studentId) {
    super(pname, age); // Call the parent class constructor
    this.studentId = studentId;
  }

  // Overriding the greet method
  greet() {
    // Call the greet method from the Person class
    const parentGreeting = super.greet();
    // Extend the message to include studentId
    return `${parentGreeting} My student ID is ${this.studentId}.`;
  }

  describeStudentId() {
    return `Student ID is: ${this.studentId}`; // Access studentId
  }
}

const student1 = new Student("Divya", 43, 101);
console.log(student1.greet());
console.log(student1.describeStudentId());

//calling the static Method
console.log("Calling static method:", Person.species());
