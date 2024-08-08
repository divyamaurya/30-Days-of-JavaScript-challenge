export const PI = 3.14159;
export const E = 2.71828;

// Functions
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Cannot divide by zero");
  }
};
