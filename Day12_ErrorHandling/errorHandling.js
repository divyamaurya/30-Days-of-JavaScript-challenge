// Activity 1: Basic Error Handling with Try-Catch
// Task 1
const throwErrorFunction = () => {
  throw new Error("This is an intentional error.");
};
const handleError = () => {
  try {
    throwErrorFunction();
  } catch (error) {
    console.error("Error", error.message);
  }
};
handleError();

// Task 2
const divideTwoNumber = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Error while dividing two number", 10 / 0);
  }
  return numerator / denominator;
};
const handleErrorDivideTwoNumber = () => {
  const numerator = 10;
  const denominator = 0;
  try {
    const result = divideTwoNumber(numerator, denominator);
    console.log("result", result);
  } catch (error) {
    console.error("Error", error.message);
  }
};

handleErrorDivideTwoNumber();

// Activity 2: Finally Block
// Task 3
const handleFinallyBlock = () => {
  try {
    console.log("Try Block");
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Division by 0");
    }
    console.log("result of try  block", result);
  } catch (error) {
    console.error("Error block", error.message);
  } finally {
    console.log("Finally block: Execution finished and cleaning up");
  }
};
handleFinallyBlock();

// Activity 3: Custom Error Objects
// Task 4
// Define a custom error class that extends the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError"; // Set the name property to the custom error name
  }
}

// Arrow function that throws an instance of the custom error
const riskyFunction = () => {
  throw new CustomError("Something went wrong in riskyFunction!");
};

// Try-catch block to handle the custom error
try {
  riskyFunction();
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`CustomError caught: ${error.message}`);
  } else {
    console.log(`An unexpected error occurred: ${error.message}`);
  }
}
// Task 5
// Define a custom error class that extends the built-in Error class
class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputError"; // Set the name property to the custom error name
  }
}

// Function to validate user input
const validateInput = (input) => {
  if (!input || input.trim() === "") {
    throw new InputError("Input cannot be empty or whitespace.");
  }
  return true; // Input is valid
};

// Example usage and error handling
try {
  // Change the input value to test different scenarios
  let userInput = "  "; // Example of invalid input
  validateInput(userInput);
  console.log("Input is valid.");
} catch (error) {
  if (error instanceof InputError) {
    console.log(`InputError caught: ${error.message}`);
  } else {
    console.log(`An unexpected error occurred: ${error.message}`);
  }
}

// Activity 4: Error Handling in Promises
// Task 6
// Function that returns a promise which randomly resolves or rejects
const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() >= 0.5; // 50% chance to succeed
    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    }, 1000); // Simulate async operation with a 1-second delay
  });
};

// Handle the promise
randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(`Caught an error: ${error.message}`);
  });

// Task 7
// Function that returns a promise which randomly resolves or rejects
const randomPromise2 = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() >= 0.5; // 50% chance to succeed
    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    }, 1000); // Simulate async operation with a 1-second delay
  });
};

// Async function to handle the promise with try-catch
const handleRandomPromise = async () => {
  try {
    const message = await randomPromise2();
    console.log(message);
  } catch (error) {
    console.error(`Caught an error: ${error.message}`);
  }
};

// Call the async function
handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch
// Task 8 and Task 9
// Async function to fetch data from an invalid URL and handle errors
const fetchData = async () => {
  const invalidUrl = "https://invalid-url-example.com/data";

  try {
    const response = await fetch(invalidUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Caught an error: ${error.message}`);
  }
};

// Call the async function
fetchData();

// Task 9
