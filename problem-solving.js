// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = (inputString) => {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
};

const inputString = "hello world";
const outputString = reverseString(inputString);
console.log(outputString);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumber = (inputArray) => {
  const total = inputArray.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
  return total;
};

const inputArray = [2, -5, 10, -3, 7];
const output = sumOfPositiveNumber(inputArray);
console.log(output);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findMostFrequentElement = (inputElementArray) => {
  const frequency = {};
  inputElementArray.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  const maxFrequency = Math.max(...Object.values(frequency));
  const mostFrequentElement = parseInt(
    Object.keys(frequency).find((key) => frequency[key] === maxFrequency)
  );

  return mostFrequentElement;
}

const inputElementArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputElement = findMostFrequentElement(inputElementArray);
console.log(outputElement);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersWithSum = (inputElement, targetValue) => {
 for(let i = 0; i < inputElement.length - 1; i++){
  for(let j = i + 1; j < inputElement.length; j++){
    if(inputElement[i] + inputElement[j] === targetValue){
      return [i, j];
    }
  }
 }
  return [];
}

const inputElement = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const finalResult = findTwoNumbersWithSum(inputElement, targetValue);
console.log(finalResult);

//  Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

const num1 = 5;
const num2 = 7;
const operator = "+";
const result = calculator(num1, num2, operator);
console.log(result);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (passwordLength) => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';

  const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
  
// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (roman) => {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  let previousValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[roman[i]];

    if (currentValue < previousValue) {
      result -= currentValue;
    }
    else {
      result += currentValue;
    }

    previousValue = currentValue;
  }

  return result;
}

const roman = 'IX';
const finalOutput = romanToInteger(roman);
console.log(finalOutput);

//  Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (array) => {
  array.sort((a, b) => a - b);
  return array[1];
};

const inputNumbers = [5, 2, 8, 1, 3, 7];
const smallestNumber = findSecondSmallest(inputNumbers);
console.log(smallestNumber); 