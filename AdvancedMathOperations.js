/* Filename: AdvancedMathOperations.js */

// This code demonstrates advanced math operations

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
};

const power = (a, b) => {
  return Math.pow(a, b);
};

const factorial = (num) => {
  if (num < 0) {
    throw new Error("Factorial of negative number is undefined!");
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const fibonacci = (num) => {
  if (num <= 0) {
    throw new Error("Fibonacci sequence starts from 1!");
  }
  let sequence = [1];
  let current = 1;
  let previous = 0;
  for (let i = 1; i < num; i++) {
    let next = current + previous;
    sequence.push(next);
    previous = current;
    current = next;
  }
  return sequence;
};

const primeFactors = (num) => {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
};

const checkPalindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  factorial,
  fibonacci,
  primeFactors,
  checkPalindrome,
  // ... many more advanced math operations ...
};

/* End of code */