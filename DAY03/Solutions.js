// # Program to Calculate the Square and Cube of a Number

let num = parseInt(prompt("Enter a number", 0));
findSquareAndCube(num);
function findSquareAndCube(num) {
  if (isNaN(num)) {
    console.log("Invalid Input");
    return;
  } else {
    console.log(`Square of the ${num} : ${num * num}`);
    console.log(`Cube of the ${num} : ${num * num * num}`);
  }
}

// -----------------------------------------------------------------------------------------------------------------------

// # Program to Calculate the Area of a Circle and Triangle

let radius = parseInt(prompt("Enter the radius of the circle", 1));
let base = parseInt(prompt("Enter the base of the triangle", 1));
let height = parseInt(prompt("Enter the heght of the triangle", 1));

AreaOfCircleAndTriangle(radius, base, height);

function AreaOfCircleAndTriangle(radius, base, height) {
  if (isNaN(radius) || isNaN(base) || isNaN(height)) {
    console.log("Invalid Input");
    return;
  }
  circleArea(radius);
  triangleArea(base, height);
}

function circleArea(radius) {
  let area = Math.round(Math.PI * radius * radius);
  console.log(`Area of the circle : ${area}`);
}

function triangleArea(base, height) {
  let area = Math.round(0.5 * base * height);
  console.log(`Area of the triangle : ${area}`);
}

// -----------------------------------------------------------------------------------------------------------------------

// # Write a Program to Find the Quotient and Remainder of Two Integers

let divisor = parseInt(prompt("Enter the divisor", 1));
let dividend = parseInt(prompt("Enter the dividend", 1));

findQuotientAndRemainder(divisor, dividend);

function findQuotientAndRemainder(divisor, dividend) {
  if (isNaN(divisor) || isNaN(dividend)) {
    console.log("Invalid Input");
    return;
  }

  if (divisor === 0) {
    console.log("ERROR : Divide by Zero");
    return;
  }

  let Quotient = Math.floor(dividend / divisor);
  let remainder = dividend % divisor;

  console.log(`Quotient : ${Quotient} and Remainder : ${remainder} `);
}
