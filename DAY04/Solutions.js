//* Print the Multiplication Table of a Given Number

let number = 5;
function PrintTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i} `);
  }
}

PrintTable(number);

// --------------------------------------------------------------------------------------------------------------------

//* Write a Program to Make a Simple Calculator Using a Switch Case

let Operand1 = 12;
let Operand2 = 13;
let Operator = "*";

function Calculator() {
  switch (Operator) {
    case "+":
      console.log(`Addition: ${Operand1 + Operand2}`);
      break;
    case "-":
      console.log(`Subtraction: ${Operand1 - Operand2}`);
      break;
    case "*":
      console.log(`Multiplication: ${Operand1 * Operand2}`);
      break;
    case "/":
      console.log(`Division: ${(Operand1 / Operand2).toFixed(2)}`);
      break;
    default:
      console.log("Invalid Operator");
      break;
  }
}

Calculator(Operand1, Operand2, Operator);

// ----------------------------------------------------------------------------------------------------------------

//* Print a Number in Reverse Order

let num = 1234;

function PrintReverseNum(num) {
  let reverse = null;
  while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }
  return reverse;
}

console.log(PrintReverseNum(num));
