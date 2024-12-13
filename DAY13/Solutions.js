//* Write a Program to Find the LCM of Two Numbers

function findLCM(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return "LCM is not defined for zero.";
  }

  let lcm = null;
  let max = Math.max(Math.abs(num1), Math.abs(num2));

  while (true) {
    if (max % num1 == 0 && max % num2 == 0) {
      lcm = max;
      break;
    }
    max++;
  }

  return lcm;
}

console.log(findLCM(5, 7));

// -----------------------------------------------------------------------------------------------------------

//* Write a Program to Calculate the Power of a Number

function findPowerManual(base, expo) {
  let power = base ** expo;

  return power;
}

// console.log(findPowerManual(2, 3));

function findPowerBuiltIn(base, expo) {
  let power = Math.pow(base, expo);
  return power;
}

console.log(findPowerBuiltIn(2, 3));

// -----------------------------------------------------------------------------------------------------------

//* Program to Print Integers in Words

function DigitToWord(num) {
  const digitToWord = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  let numStr = num.toString();
  let result = " ";

  for (let i = 0; i < numStr.length; i++) {
    let char = numStr[i];

    if (char === "-") {
      result += "Negative ";
    } else {
      result += digitToWord[parseInt(char)] + " ";
    }
  }

  return result.trim();
}

console.log(DigitToWord(1028));
