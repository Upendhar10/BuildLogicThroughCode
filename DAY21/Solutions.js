//* Perfect Number

function PerfectNum(n) {
  if (n <= 0) {
    return `Input must be Posivitve Number`;
  }

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  sum === n
    ? console.log(`${n} is a Perfect Number`)
    : console.log(`${n} is Not a perfect number`);
}

PerfectNum(28);

// ----------------------------------------------------------

//* Largest Prime Factor

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function LargestPrimeFactor(num) {
  if (num <= 1) return "No prime factors";
  let MaxPrime = -1;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0 && isPrime(i)) {
      MaxPrime = i;
    }
  }

  // Check if the remaining number is a prime factor
  //   if (num > 1 && isPrime(num)) {
  //     MaxPrime = num;
  //   }

  return MaxPrime;
}

console.log(LargestPrimeFactor(13195));

// ---------------------------------------------------------

//* Sum of Series of n terms

function SumSeries(n) {
  if (n <= 0) {
    return `Input must be Posivitve Number`;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + 1 / i;
  }

  return parseFloat(sum.toFixed(3));
}

console.log(SumSeries(4));
