//* Find the Frequency of Each Element in an Array

function FindFrequencyofElements(arr) {
  let frequency = {};

  for (let num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  return frequency;
}

console.log(FindFrequencyofElements([1, 2, 2, 3, 1, 4, 5, 1]));

// ---------------------------------------------------------------------

//*  Check Palindrome

function checkPalindromString(str) {
  let OriginalStr = str;
  let reverseStr = "";

  let ptrJ = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(ptrJ)) {
      reverseStr = reverseStr + str.charAt(i);
    }
    ptrJ--;
  }

  if (reverseStr === OriginalStr) {
    return `"${OriginalStr}" is a Palindrome`;
  } else {
    return `"${OriginalStr}" is not a Palindrome`;
  }
}

console.log(checkPalindromString("madam"));

// ---------------------------------------------------------------------

//*  Count Words in a String

function FindWordsCount(str) {
  return str.split(" ").length;
}
console.log(FindWordsCount("I love programming"));
