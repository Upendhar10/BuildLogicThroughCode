//*  Check if a String is a Palindrome

function checkPlaindromeRecursion(str, start = 0, end = str.length - 1) {
  // base case : Single character or empty string
  if (start >= end) {
    return "true";
  }

  if (str.charAt(start) !== str.charAt(end)) {
    return false;
  }

  return checkPlaindromeRecursion(str, start + 1, end - 1);
}

console.log(checkPlaindromeRecursion("radar"));

// ----------------------------------------------------------------------

//*  Find GCD of Two Numbers

function FindGCDRecursion(num1, num2) {
  if (num2 == 0) {
    return num1;
  }

  return FindGCDRecursion(num2, num1 % num2);
}

console.log(FindGCDRecursion(56, 98));

// ---------------------------------------------------------------------

//*  Binary Representation of a Number

function BinaryRepresentationRecursion(n) {
  // base condition
  if (n === 0) {
    return "";
  }

  let quotient = Math.floor(n / 2);

  let result = n % 2;

  return BinaryRepresentationRecursion(quotient) + result;
}

console.log(BinaryRepresentationRecursion(10));
