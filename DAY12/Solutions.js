//*  Factorial of a Number Using a For Loop

function FindFactorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

console.log(FindFactorial(4));

// ---------------------------------------------------------------------------------

//*  Print Fibonacci Series

function PrintFibonacciSeries(n) {
  let prev = 0,
    next = 1;

  let series = `${prev} ${next}`;

  for (let i = 2; i < n; i++) {
    let result = prev + next;
    series += ` ${result}`;

    prev = next;
    next = result;
  }

  console.log(series);
}

PrintFibonacciSeries(7);

// ---------------------------------------------------------------------------------

//*  Write a Program to Find the GCD or HCF of Two Numbers

function findHCF(num1, num2) {
  let hcf = 1;

  //   let i = Math.min(num1, num2); i >= 1;  i--

  for (let i = 1; i < Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log(findHCF(60, 48));
