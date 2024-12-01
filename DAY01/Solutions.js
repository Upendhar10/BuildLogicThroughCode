// # Program to Print Integer Numbers Entered by the User:

/*
    - Since, NaN (Not-a-Number) is a special value in JavaScript, and comparing it with == or === will always return false. This is because NaN is not equal to itself by design. So we use isNaN() function
    - isNaN(): This function checks if the value is NaN and returns true if it is, and false otherwise.
*/

var num = parseInt(prompt("Enter any number", 0));
isNaN(num)
  ? console.log(num + " is not a valid number")
  : console.log("You entered: " + num);

// ----------------------------------------------------------

// # Write a Program to Find the Size of int, float, double, and char on Your Computer:

/*
    - In JavaScript, we cannot directly determine the memory size of fundamental data types like int, float, or char as you would in statically typed languages like C or C++. This is because JavaScript is a dynamically typed language, and it abstracts away memory management details.
    
    - All numbers in JavaScript, whether integers or floating points, are represented as 64-bit floating-point values (IEEE 754 standard). 
    - Strings are collections of characters, and their size depends on encoding (e.g., UTF-16 in JavaScript).There is no direct equivalent for a char type.

    - We need to use workarounds involving buffers, typed arrays, or specialized libraries, but those are more advanced concepts for now.

*/

// ----------------------------------------------------------

// # Program to Find the Larger Number Among Two Numbers:

const num1 = parseInt(prompt("Enter num1 value", 0));
const num2 = parseInt(prompt("Enter num2 value", 0));

function findMax(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid Inputs";
  } else {
    return Math.max(num1, num2);
  }
}

console.log(findMax(num1, num2));
