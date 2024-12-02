let num = parseInt(prompt("Enter a number: ", 0));

//* Program to Check Whether the Number is Odd or Even:

function CheckEvenOdd(num) {
  if (isNaN(num)) {
    console.log("Invalid Input");
  } else {
    if (num % 2 == 0) {
      console.log(`${num} is an even number`);
    } else console.log(`${num} is an Odd number`);
  }
}

CheckEvenOdd(num);

// ------------------------------------------------------------------------------------------------------

//* Program to Check Whether the Number is Divisible by 5:

function divisibleBy5(num) {
  if (isNaN(num)) {
    console.log("Invalid Input");
  } else {
    if (num % 5 == 0) {
      console.log(`${num} is divisible`);
    } else console.log(`${num} is not divisible by 5`);
  }
}

divisibleBy5(num);

// --------------------------------------------------------------------------------------------------------

//* Program to Check Whether the Number is a Multiple of 7:
function multipleOf7(num) {
  if (isNaN(num)) {
    console.log("Invalid Input");
  } else {
    if (num % 7 === 0) {
      console.log(`${num} is a multiple of 7`);
    } else console.log(`${num} is not divisible by 7`);
  }
}
