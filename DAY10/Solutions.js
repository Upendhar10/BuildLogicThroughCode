//* Pattern - 1

function Pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let rowPattern = " ";
    for (let j = 1; j <= i; j++) {
      rowPattern += String.fromCharCode(65 + i - 1) + " ";
    }
    console.log(rowPattern.trim());
  }
}

Pattern1(5);

// ---------------------------------------------------------------------------------------------------
//* Pattern - 2

function Pattern2(n) {
  for (let i = 0; i < n; i++) {
    let rowPattern = " ";

    for (let j = 0; j < n - i; j++) {
      rowPattern += `. `;
    }

    for (let k = 0; k < i; k++) {
      rowPattern += String.fromCharCode(65 + k) + " ";
    }

    for (let l = 0; l <= i; l++) {
      rowPattern += String.fromCharCode(65 + i - l) + " ";
    }

    console.log(rowPattern.trim());
  }
}

Pattern2(4);

// ---------------------------------------------------------------------------------------------------
//* Question - 3

let number1 = 10;
let number2 = 28;

console.log("Before Swap");

console.log(`Number1 : ${number1}`);
console.log(`Number2 : ${number2}`);

function SwapTwoNumbers1(num1, num2) {
  let temp = null;

  temp = num1;
  num1 = num2;
  num2 = temp;

  console.log("After Swap");

  console.log(`Number1 : ${num1}`);
  console.log(`Number2 : ${num2}`);
}

SwapTwoNumbers1(number1, number2);

function SwapTwoNumbers2(num1, num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  console.log("After Swap");

  console.log(`Number1 : ${num1}`);
  console.log(`Number2 : ${num2}`);
}

// SwapTwoNumbers2(number1, number2);
