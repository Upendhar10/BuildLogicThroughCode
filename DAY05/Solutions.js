//* Calculate the Sum of Digits of a Given Number

let number = 1234;

function findSumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(`The Sum of Digits of ${number} :`, findSumOfDigits(number));

// -----------------------------------------------------------------------------------------------------------

//* Write a Program to Check Whether a Character is a Vowel or Consonant

let char = "Z";

function checkCharacter(char) {
  if (char.length != 1 || !/[a-zA-Z]/.test(char)) {
    return "Invalid Input";
  }

  let letter = char.toLowerCase();

  if ("aeiou".includes(letter)) {
    return `${char} is an Vowel`;
  } else {
    return `${char} is a Consonant`;
  }
}

console.log(checkCharacter(char));

// ------------------------------------------------------------------------------------------------------------

//* Write a Program to Find the ASCII Value of a Character

let Value = "@";

function findASCIIValue(val) {
  if (val === " " || val.length != 1) {
    return "Invalid Input";
  }
  return `ASCII value of ${val}: ${val.charCodeAt(0)}`;
}

console.log(findASCIIValue(Value));
