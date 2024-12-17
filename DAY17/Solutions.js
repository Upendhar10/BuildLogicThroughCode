//* Program to Convert Binary Numbers to Decimal and Vice Versa Manually:

// Function to convert Binary to Decimal
function binaryToDecimal(binary) {
  let decimal = 0;
  let position = 0;

  while (binary > 0) {
    let digit = binary % 10; // Extract the last digit
    decimal += digit * Math.pow(2, position); // Multiply by 2^position
    position++;
    binary = Math.floor(binary / 10); // Remove the last digit
  }

  return decimal;
}

// Function to convert Decimal to Binary
function decimalToBinary(decimal) {
  let binary = "";

  while (decimal > 0) {
    let remainder = decimal % 2; // Get remainder
    binary = remainder + binary; // Add remainder to the left
    decimal = Math.floor(decimal / 2); // Divide by 2
  }

  return binary || "0"; // If input is 0, return "0"
}

// User Input and Output
const binaryInput = 1010;
console.log(
  `Binary ${binaryInput} -> Decimal: ${binaryToDecimal(binaryInput)}`
);

const decimalInput = 10;
console.log(
  `Decimal ${decimalInput} -> Binary: ${decimalToBinary(decimalInput)}`
);

// -----------------------------------------------------------

//* Pattern - 1

function PrintPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern.trim());
  }
  for (let i = n - 1; i >= 1; i--) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern.trim());
  }
}

PrintPattern1(5);

// ----------------------------------------------------------

//* Pattern - 2


function PrintPattern2(n) {
  // Upper half of the pattern
  for (let i = 1; i <= n; i++) {
    let rowPattern = "  ".repeat(n - i) + "* ".repeat(i * 2 - 1);
    console.log(rowPattern);
    // console.log(rowPattern.trim());
  }

  // Lower half of the pattern
  for (let i = n - 1; i >= 1; i--) {
    let rowPattern = " ".repeat((n - i) * 2) + "* ".repeat(i * 2 - 1);
    console.log(rowPattern);
  }
}

PrintPattern2(5);
