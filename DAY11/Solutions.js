//* Program to Find the Largest Number Among Three Numbers

function LargestAmongThreeNums(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is Largest`);
    } else {
      console.log(`${num3} is Largest`);
    }
  } else {
    if (num2 > num3) {
      console.log(`${num2} is Largest`);
    } else {
      console.log(`${num3} is Largest`);
    }
  }
}

LargestAmongThreeNums(-3, -2, -1);

// --------------------------------------------------------------

//*  Program to Check Whether a Year Entered by the User is a Leap Year

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap year`);
  } else {
    console.log(`${year} is not a Leap Year`);
  }
}

isLeapYear(2024);

// --------------------------------------------------------------

//*  Program to Calculate the Sum of the First N Natural Numbers

function SumOfFirstNnaturalNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return `Sum : ${sum}`;
}

console.log(SumOfFirstNnaturalNums(5));
