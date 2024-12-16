//*  Write a Program to Check Whether a Number is a Palindrome

function ValidPalindrome(num) {
  if (isNaN(num)) {
    return "Invalid Input!";
  }

  let OriginalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    let rem = num % 10;
    reversedNum = reversedNum * 10 + rem;
    num = Math.floor(num / 10);
  }

  console.log(reversedNum);

  if (OriginalNum === reversedNum) {
    return `${OriginalNum} is a Valid Palindrome`;
  }

  return `${OriginalNum} is not a Valid Palindrome`;
}

console.log(ValidPalindrome(12));

// ----------------------------------------------------------------------

//*  Check if an Integer Can Be Expressed as the Sum of Two Prime Numbers

function isPrime(n) {
  if (n < 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function SumOfTwoPrimes(N) {
  let Primes = [];
  for (let i = 2; i <= N / 2; i++) {
    let compliment = N - i;

    if (isPrime(i) && isPrime(compliment)) {
      Primes.push(`${N} = ${i} + ${compliment}`);
      //   Primes.push(i, compliment);
    }
  }

  if (Primes.length === 0) {
    console.log(`${N} cannot be expressed as the sum of two prime numbers`);
  } else {
    console.log(Primes.join("\n"));
  }
}

SumOfTwoPrimes(34);

// -------------------------------------------------------------------------

//*  Print All Digits and Alphabets Using a For Loop

function PrintNumbers() {
  let Digits = [];
  for (let i = 0; i < 10; i++) {
    Digits.push(i);
  }

  return Digits;
}

function PrintAlphabets() {
  let Alphabets = [];
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    Alphabets.push(String.fromCharCode(i));
  }

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    Alphabets.push(String.fromCharCode(i));
  }

  return Alphabets;
}

console.log(PrintNumbers());
console.log(PrintAlphabets());
