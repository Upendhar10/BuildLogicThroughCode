//*  Print Numbers in Words in Reverse Order Using a Switch Case

function NumToWordsReverse(num) {
  if (isNaN(num)) {
    console.log("Invalid Input");
    return;
  }

  let result = "";

  if (num < 0) {
    result += "Negative ";
    num = Math.abs(num);
  }

  while (num > 0) {
    let digit = num % 10;

    switch (digit.toString()) {
      case "0":
        result += "Zero ";
        break;
      case "1":
        result += "One ";
        break;
      case "2":
        result += "Two ";
        break;
      case "3":
        result += "Three ";
        break;
      case "4":
        result += "Four ";
        break;
      case "5":
        result += "Five ";
        break;
      case "6":
        result += "Six ";
        break;
      case "7":
        result += "Seven ";
        break;
      case "8":
        result += "Eight ";
        break;
      case "9":
        result += "Nine ";
        break;
    }

    num = Math.floor(num / 10);
  }

  return result;
}

console.log(NumToWordsReverse(-321));

// -----------------------------------------------------------

//*  Write a Program to Display All Factors of a Number

function PrintFactors(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(PrintFactors(28));

// ----------------------------------------------------------

//*  Amstrong Number or Not:

function ValidAmstrong(num) {
  if (isNaN(num) || num < 0) {
    console.log("Invalid Input, Please enter a non-negative integer.");
    return;
  }

  let OriginalNum = num;
  let DigitCount = num.toString().length;
  let result = 0;

  while (num > 0) {
    let digit = num % 10;

    result += digit ** DigitCount;

    num = Math.floor(num / 10);
  }

  result === OriginalNum
    ? console.log(`${OriginalNum} is an Amstrong Number`)
    : console.log(`${OriginalNum} is not an Amstrong Number`);
}

ValidAmstrong(1634);
