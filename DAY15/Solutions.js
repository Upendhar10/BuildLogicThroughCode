//*  Check Whether a Number is Prime or Not

function ValidPrime(num) {
  if (num <= 1) {
    return `${num} is Not Prime`;
  }

  if (num == 2) {
    return `${num} is Prime`;
  }

  if (num % 2 === 0) {
    return `${num} is Not Prime`;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return `${num} is Not Prime`;
    }
  }
  return `${num} is Prime`;
}

console.log(ValidPrime(5));

// -----------------------------------------------------------

//*  Print Prime Numbers Within a Range

function PrimeNumsInRange(start, end) {
  let result = [];
  for (let i = Math.max(start, 2); i <= end; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) result.push(i);
  }
  return result;
}

console.log(PrimeNumsInRange(5, 15));

// -----------------------------------------------------------

//*  Print Factorial Series

function PrintFactorialSeries1(num) {
  for (let i = 1; i <= num; i++) {
    let fact = 1;
    for (let j = 1; j <= i; j++) {
      fact = fact * j;
    }
    console.log(`${i}! = ${fact}`);
  }
}

// PrintFactorialSeries1(5);

function PrintFactorialSeries2(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
    console.log(`${i}! = ${fact}`);
  }
}

PrintFactorialSeries2(5);
